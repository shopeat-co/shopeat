import { Component } from '@angular/core';
declare var $: any; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  module_names: string[] = ['', 'Harmonogram', 'Zakupy', 'Przepisy', 'Produkty'];
  title = 'shopeat';
  grid_index_array: number[] = [1, 2, 3, 4, 5, 6];
  day_index_array: string[] = ['', '14 Stycznia', '15 Stycznia', '16 Stycznia', '17 Stycznia', '18 Stycznia', '19 Stycznia'];
  view_type_name: string = `Tydzień`;
  date_range: string = `14 Stycznia - 19 Stycznia`;
  curr_shop_list: string[] = [`Kawa`, `Seler`, `Pomidorki koktajlowe`, `Kurczak`, `Ryż`, `Kawa`];
  breakfast_list: string[] = ['Jajecznica', 'Kawa', 'Kanapki'];
  lunch_list: string[] = ['Butter Chicken', 'Ryż'];
  dinner_list: string[] = [`Sałatka Cezar`, `Grzanki`]
  active_mod_id: any = ((localStorage.getItem(`module`)) ? localStorage.getItem(`module`) : '1');
  module_name: string = this.module_names[Number(this.active_mod_id)];
}
$(function(){
  $('#right_sidebar_list li').on('click', function(){
    $(this).toggleClass('list_element_checked')
  })
  $('#left_sidebar_list li').on('click', function(){
    let mod_id: string = $(this).attr(`mod_id`);
    localStorage.setItem(`module`, mod_id);
    setTimeout(function(){
      window.location.reload();
    })
  })
})