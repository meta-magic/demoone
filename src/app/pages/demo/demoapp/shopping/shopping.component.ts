/**
 * Created by: MetaMagic
 * Date: 29/05/2018
 * Organization: MetaMagic	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'shopping',
  templateUrl: 'shopping.component.html'
})
export class ShoppingComponent implements OnInit{
  shoppingModel:ShoppingModel;
 
  constructor(private http: HttpClient) {
    this.shoppingModel=new ShoppingModel();
       }
  ngOnInit(){
  }
 

   
}
export class ShoppingModel{
 }
