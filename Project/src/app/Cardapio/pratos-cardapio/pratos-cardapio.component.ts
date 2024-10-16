import { Component } from '@angular/core';

@Component({
  selector: 'app-pratos-cardapio',
  templateUrl: './pratos-cardapio.component.html',
  styleUrl: './pratos-cardapio.component.css'
})
export class PratosCardapioComponent {

  Populares = [
    {
      Nome: "Ramen de frango",
      Description: "Delicioso ramen com peito de frango grelhado, legumes frescos e um caldo rico em sabor. Perfeito para quem busca uma refeição leve e nutritiva.",
      Valor: "R$ 32",
      Img : '/Img-PratoPopular-Frango.png'
    },
    {
      Nome: "Ramen apimentado",
      Description: "Uma explosão de sabores com o ramen apimentado. Com ingredientes frescos, ovo cozido e pimenta que dão o toque ideal para os amantes de comida picante.",
      Valor: "R$ 35",
      Img : '/Img-PratoPopular-Apimentado.png'
    },
    {
      Nome: "Ramen tradicional",
      Description: "O clássico ramen japonês, com caldo saboroso, noodles perfeitos, ovo e legumes frescos, ideal para quem procura uma experiência autêntica.",
      Valor: "R$ 30",
      Img : '/Img-PratoPopular-Tradicional.png'
    }
  ];

  Sushi = [
    {
      Nome: "Sashimi de Salmão",
      Description: "Fatias frescas de salmão servidas com molho shoyu e gengibre, destacando a pureza do peixe.",
      Valor: "R$ 35,00",
      Img: '/Img.Cardapio-SashimideSalmao.png'
    },
    {
      Nome: "Combinado Sushi Especial",
      Description: "Seleção de 8 sushis variados, incluindo salmão, atum e peixe branco para uma refeição completa.",
      Valor: "R$ 45,00",
      Img: '/Img.Cardapio-Sushi Especial.png'
    },
    {
      Nome: "Nigiri de Atum",
      Description: "Arroz temperado com fatias de atum fresco, uma combinação clássica de sabores.",
      Valor: "R$ 28,00",
      Img: '/Img-Cardapio-NigirideAtum.png'
    },
    {
      Nome: "Combo Sushi Misto",
      Description: "Combinação de sashimi, uramaki, temaki e nigiri, perfeita para quem quer experimentar um pouco de tudo.",
      Valor: "R$ 55,00",
      Img: '/Img-Cardarpio-ComboSushi Misto.png'
    }
  ];

  Quentes = [
    {
      Nome: "Yakissoba de Frango",
      Description: "Macarrão frito com frango, legumes e molho especial, um prato vibrante e saboroso.",
      Valor: "R$ 38,00",
      Img: '/Img-pratos-YakissobaFrango.png'
    },
    {
      Nome: "Curry de Legumes",
      Description: "Legumes cozidos em molho de curry aromático, servido com arroz para uma opção saudável.",
      Valor: "R$ 32,00",
      Img: '/Img-Pratos-CurrydeLegumes.png'
    },
    {
      Nome: "Ramen de Porco",
      Description: "Macarrão em caldo de porco, com fatias de carne, ovo e alga nori, perfeito para aquecer o corpo.",
      Valor: "R$ 45,00",
      Img: '/Img-prato-RamendePorco.png'
    },
    {
      Nome: "Frango Teriyaki",
      Description: "Peito de frango grelhado com molho teriyaki, acompanhado de arroz e brócolis, uma refeição equilibrada.",
      Valor: "R$ 40,00",
      Img: '/Img-pratos-FrangoTeriyaki.png'
    }
  ];
  
}
