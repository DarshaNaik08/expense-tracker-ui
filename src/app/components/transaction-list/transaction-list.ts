import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Transaction } from '../../models/transaction';
import { TransactionService } from '../../services/transaction';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-list.html',
  styleUrl: './transaction-list.css',
})
export class TransactionList implements OnInit {

  private transactionService = inject(TransactionService);
  private destroyRef = inject(DestroyRef);
  private router = inject(Router);
  transactions = signal<Transaction[]>([]);

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.transactionService.getAll().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(
      (data) => this.transactions.set(data)
    );
  }

  getTotalIncome(): number {
    return this.transactions().filter(t => t.type === 'Income').reduce((sum, t) => sum + t.amount, 0);
  }

  getTotalExpenses(): number {
    return this.transactions().filter(t => t.type === 'Expense').reduce((sum, t) => sum + t.amount, 0);
  }

  getNetBalance(): number {
    return this.getTotalIncome() - this.getTotalExpenses();
  }

  editTransaction(transaction: Transaction) {
    if (transaction.id) {
      this.router.navigate(['/edit/', transaction.id])
    }
  }

  deleteTransaction(transaction: Transaction) {
    if (transaction.id) {
      if (confirm("Are you sure you want to delete this transaction?")) {
        this.transactionService.delete(transaction.id).subscribe({
          next: () => {
            this.loadTransactions()
          },
          error: (error) => {
            console.log('Error ', error);
          }
        })
      }
    }
  }
}