import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }

  /*Buscar un heroe*/
  enterHeroSearch(hero: string){
    browser.sleep(2000);
    element(by.id('search-box')).sendKeys(hero);
    browser.sleep(2000);
    return element.all(by.css('.search-result'));
  }

  /*Eliminar Heroe*/
  removeHero(){
    /*Entra recurrente a los dos element para ubicar primero la clase heroes 
    y posteriormente la clase delete del heroe en la lista*/
    browser.sleep(2000);
    element(by.css('.heroes')).element(by.css('.delete')).click()
    browser.sleep(2000);
  }

  getTag(){
    return element.all(by.tagName("H2")).getText();
  }

  selectHeroDashBoard(){
    browser.sleep(2000);
    element(by.css('.col-1-4')).click();
    browser.sleep(2000);
  }

}
