import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  type_user_list: Array<any> = []
  type_document_list: Array<any> = []
  dataForm: any = {
    type_user: null,
    type_document: null,
    num_document: null,
    ap_paterno: null,
    ap_materno: null,
    name: null,
    phone: null,
    email: null,
    address: null,
  }
  constructor() {
    this.type_user_list = [
      {
        type: 1,
        name: 'Natural',
      },
      {
        type: 2,
        name: 'Jurídica',
      },
    ]
    this.type_document_list = [
      {
        type: 1,
        name: 'RUC',
      },
      {
        type: 2,
        name: 'DNI',
      },
      {
        type: 3,
        name: 'Pasaporte',
      },
      {
        type: 4,
        name: 'Carnet de extranjería',
      },
    ]
  }

  ngOnInit(): void {}
  sendForm() {
    console.log(this.dataForm)
  }

  validateData() {
    let disabled = false
    for (const item in this.dataForm) {
      if (this.dataForm[item] == null || this.dataForm[item] == '') {
        disabled = true
      }
    }
    return disabled
  }
}
