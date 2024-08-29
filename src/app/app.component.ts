import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  tryOutLanguages: boolean = false;

  stepsList: any [] = [
     { stepName: 'Choose a language.', isCompleted: false },
     { stepName: 'Thinking or looking for a project.', isCompleted: false },
     { stepName: 'Start developing.', isCompleted: false },
  ];
  activeStep: any = this.stepsList[0];

  stepperCompletionValue: number = 8; // 8% is the default value for the progress bar

  changeTheme(theme:string)
  {
    const body=document.body as HTMLElement
    body.setAttribute('data-bs-theme',theme)
  }

  setActiveStep(stepSelected: any) {
    this.activeStep = stepSelected;
    switch(stepSelected.stepName) {
      case 'Choose a language.':
        this.stepperCompletionValue = 8;
        this.stepsList.forEach(step => step.isCompleted = step.stepName === 'Choose a language.');
        break;
      case 'Thinking or looking for a project.':
        this.stepperCompletionValue = 50;
        this.stepsList.forEach(step => step.isCompleted = step.stepName === 'Choose a language.' || step.stepName === 'Thinking or looking for a project.');
        break;
      case 'Start developing.':
        this.stepperCompletionValue = 90;
        this.stepsList.forEach(step => step.isCompleted = true);
        break;
    }
  }

  setActiveLanguage() {
    if(this.tryOutLanguages) {
    this.tryOutLanguages = false;
    } else {
      this.tryOutLanguages = true;
    }
  }
}
