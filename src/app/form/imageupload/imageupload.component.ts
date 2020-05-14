import { Component, HostListener, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ImageuploadComponent,
      multi: true
    }
  ]
})

// contoh custom inputan untuk form control, detail : https://github.com/NetanelBasal/ng-file-upload
export class ImageuploadComponent implements ControlValueAccessor  {
  onChange: Function;
  private file: File | null = null;
  
  //Membuat listener ketika ada aksi CHANGE pada DOM files
  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    const file = event && event.item(0);
    this.onChange(file);
    this.file = file;
  }

  // Constructor class untuk listen element DOM
  constructor( private host: ElementRef<HTMLInputElement> ) {
  }
  
  // Tiga fungsi dibawah diperlukan, jika dihapus akan menimbulkan error karena tipe data ControlValueAccessor
  writeValue( value: null ) {
    this.host.nativeElement.value = '';
    this.file = null;
  }

  registerOnChange( fn: Function ) {
    this.onChange = fn;
  }

  registerOnTouched( fn: Function ) {
  }
}
