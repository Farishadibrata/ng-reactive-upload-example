import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { FormControl, FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { HttpClient, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FormComponent,
      multi: true
    }
  ]
})
export class FormComponent implements OnInit {
  // From Group + Form Control
  // https://angular.io/api/forms/FormGroup#create-a-form-group-with-2-controls
  formInput = new FormGroup({
    A: new FormControl('Inputan A'),
    B: new FormControl('Inputan B'),
    image: new FormControl()
  })
  // Sumber Data Untuk tabel, BAD EXAMPLE usahakan hindari tipe data any untuk memaksimalkan penggunaan Typescript
  dataSource : any
  // Column yang ditampilkan
  displayedColumns : string[] = ['A', 'B', 'gambar']
  constructor( private http: HttpClient ) { }

  ngOnInit(){
  }

  toFormData(formValue){
    const formData = new FormData()
    for(const key of Object.keys(formValue)){
      const value = formValue[key]
      formData.append(key, value)
    }
    return formData
  }

  uploadData(){
    this.http.post('http://127.0.0.1:8000/upload', this.toFormData(this.formInput.value)).subscribe(res => {
      console.log('Cek Hasil')
      console.log(res)
      this.formInput.reset()
    })
  }
  refreshList(){
    this.http.get('http://127.0.0.1:8000/list').subscribe(res => {
      this.dataSource = res['Data']
      console.log(res)
    })
  }
  bukaGambar(img){
    window.open(`http://127.0.0.1:8000/download?filename=${img}`, '_blank')
  }
}
