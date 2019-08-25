import { TourOfHeroesPage } from './app.po';

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });
});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should add a new hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('My new Hero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });

});

describe('Tour of herous, buscar un heroe', () =>{
  let page: TourOfHeroesPage;

  beforeEach(() =>{
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('Buscar Heroe', () =>{
    page.navigateTo();
    expect(page.enterHeroSearch("Bombasto").count()).toBe(1);
  });
});

describe('Tour of herous, Elimina tu heroe', () =>{
    let page: TourOfHeroesPage;

    beforeEach(()=>{
      page = new TourOfHeroesPage;
      page.navigateToHeroes();
    });

    it('Eliminar un Heroe', () =>{
      const currentHeroes = page.getAllHeroes().count();
      page.removeHero();
      //eliminar el heroe
      expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n - 1));
    })

 });

