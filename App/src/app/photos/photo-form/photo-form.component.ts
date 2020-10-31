import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PhotoService} from "../photo/photo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {

  photoForm:FormGroup;
  file:File;
  preview:string;

  constructor(
    private photoService:PhotoService,
    private formBuilder:FormBuilder,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.photoForm = this.formBuilder.group({
      file:['',Validators.required],
      description:['',Validators.maxLength(300)],
      allowComments:[true]
    })
  }
  upload(){
    const description = this.photoForm.get('description').value;
    const allowComments = this.photoForm.get('allowComments').value;
    this.photoService
      .upload(description,allowComments,this.file)
      .subscribe(()=>this.router.navigate(['']))
  }
  handleFile(file:File){
    /** Convertemos nossa imagem para base64 data:.... **/
      this.file = file;
      const reader = new FileReader();
      reader.onload = (event:any) => this.preview = event.target.result;
      reader.readAsDataURL(file);
  }

}
