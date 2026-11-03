import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Transaction } from '../../models/transaction';
import { TransactionService } from '../../services/transaction';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-list.html',
  styleUrl: './transaction-list.css',
})
export class TransactionList implements OnInit{

  private transactionService = inject(TransactionService);

  transactions: Transaction[] = [];

  ngOnInit(): void{
    this.loadTransactions();
  }

  loadTransactions():void{
    this.transactionService.getAll().subscribe((data)=> this.transactions = data);
  }
}