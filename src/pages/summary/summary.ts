import {Component, ViewChild} from '@angular/core';

import {NavController, Slides} from 'ionic-angular';
import {CategoryPage} from "../category/category";

@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html'
})
export class SummaryPage {
  selectedSegment: string = "general";
  summary_programs:Array<any>=[
    {
      code:'general',
      name:'Général',
      rubrics:[
        {
          code:'mobidity',
          name:'Morbidity',
          dimensions:[
            [{
              code:'<5',
              name:'Under 5'
            },
              {
                code: '>=5',
                name: 'Over 5'
              }],
            [{
              code:'M',
              name:'Male'
            },
              {
                code:'F',
                name:'Female'
              }]
          ],
          categories:[
            {
              code:'URTI',
              name:'Upper Respiratory Tract Infection'
            },
            {
              code:'LRTI',
              name:'Lower Respiratory Tract Infection'
            },
            {
              code:'WD',
              name:'Watery diarrhoea'
            },
            {
              code:'BDIA',
              name:'Bloody diarrhoea'
            },
            {
              code:'SCHO',
              name:'Suspected Cholera'
            },
            {
              code:'CMAL',
              name:'Confirmed Malaria '
            },
            {
              code:'SMEA',
              name:'Suspected Measles'
            }
          ]
        },
        {
          code:'consultations',
          name:'Consultations',
          dimensions:[
            [{
              code:'<5',
              name:'Under 5'
            },
              {
                code: '>=5',
                name: 'Over 5'
              }],
            [{
              code:'M',
              name:'Male'
            },
              {
                code:'F',
                name:'Female'
              }]
          ],
          categories:[
            {
              code:'NC',
              name:'New cases'
            },
            {
              code:'FU',
              name:'Follow-up'
            }
          ]

        }]
    },
    {
      code: 'srh',
      name: 'SRH',
      rubrics:[
        {
          code:'ancvisits',
          name:'ANC Visits',
          dimensions:[
            [{
              code:'all',
              name:'All'
            }]
          ],
          categories:[
            {
              code:'anc1',
              name:'ANC 1st visit'
            },
            {
              code:'anc2',
              name:'ANC 2nd visit'
            },
            {
              code:'anc3',
              name:'ANC 3rd visit'
            },
            {
              code:'anc4',
              name:'ANC 4th visit'
            },
            {
              code:'anc4+',
              name:'ANC >4th visit'
            }
          ]
        },
        {
          code:'anctesting',
          name:'ANC Testing',
          dimensions:[
            [{
              code:'positive',
              name:'Positive'
            },
              {code:'all',
              name:'Total'}]
          ],
          categories:[
            {
              code:'ancsyphilis',
              name:'Number Syphilis tests performed'
            },
            {
              code:'anchiv',
              name:'Number HIV tests performed'
            },
            {
              code:'ancuti',
              name:'Number Urinary Tract Infection tests performed'
            }


          ]
        }
        ]
    },
    {
      code: 'nutrition',
      name: 'Nut',
      rubrics:[
        {
          code:'nutsurv',
          name:'NUT SURVEILLANCE',
          dimensions:[
            [{
              code:'65-84',
              name:'65 - 84.9cm'
            },
              {
                code: '85-110',
                name: '85 - 110cm'
              }]
          ],
          categories:[
            {
              code:'muac135',
              name:'Total MUAC > 135'
            },
            {
              code:'muac135-125',
              name:'Total MUAC 135-125'
            },
            {
              code:'muac125-116',
              name:'Total MUAC 125-116'
            },
            {
              code:'muac115',
              name:'Total MUAC <115'
            },
            {
              code:'oedemas',
              name:'Total oedemas'
            }
          ]
        }]
    },
    {
      code: 'laboratory',
      name: 'Lab',
    },
    {
      code: 'vaccination',
      name: 'Vacci',
    },
    {
      code: 'migrantion',
      name: 'Migration',
    }
  ]

  dataTestSet:Array<any>=[
    {code:'URTI', data:[8,12,3,7]},
    {code:'LRTI', data:[23,12,3,7]},
    {code:'WD', data:[43,12,3,7]},
    {code:'BDIA', data:[22,12,3,7]},
    {code:'SCHO', data:[18,12,3,7]},
    {code:'CMAL', data:[29,12,3,7]},
    {code:'SMEA', data:[34,12,3,7]},
    {code:'NC', data:[134,128,34,65]},
    {code:'FU', data:[87,93,30,45]},
    {code:'muac135', data:[3,7]},
    {code:'muac135-125', data:[12,7]},
    {code:'muac125-116', data:[18,12]},
    {code:'muac115', data:[18,7]},
    {code:'oedemas', data:[18,7]},
    {code:'anc1',data:[34]},
    {code:'anc2',data:[30]},
    {code:'anc3',data:[10]},
    {code:'anc4',data:[6]},
    {code:'anc4+',data:[3]},
    {code:'ancsyphilis',data:[3,38]},
    {code:'anchiv',data:[7,38]},
    {code:'ancuti',data:[1,38]}
]

  constructor(public navCtrl: NavController) {
  }

  getDataFromCategoryCode(categoryCode){
    // TODO contrôle dans le cas d'une catégorie sans donnée
    return this.dataTestSet.find(myObj => myObj.code==categoryCode).data;
  }

  pushViewCategory(cat,rub){
    this.navCtrl.push(CategoryPage,{
      category:cat,
      data:this.getDataFromCategoryCode(cat.code),
      rubric:rub});
  }

  showSegment(i){
    this.selectedSegment = i;
  }

  hideSegment(a,b){
    if(a!=b) return true;
  }

}
