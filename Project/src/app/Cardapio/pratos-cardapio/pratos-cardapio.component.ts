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
      Description:"Fatias frescas de salmão, servidas com molho shoyu e gengibre.",
      Valor: "R$ 35,00",
      Img: '/Img.Cardapio-SashimideSalmao.png'
    },
    {
      Nome: "Combinado Sushi Especial",
      Description:"Seleção de 8 sushis variados, incluindo salmão, atum e peixe branco.",
      Valor: "R$ 45,00",
      Img: '/Img.Cardapio-Sushi Especial.png'
    },
    {
      Nome: "Nigiri de Atum",
      Description:"Arroz temperado coberto com fatias de atum fresco.",
      Valor: "R$ 28,00",
      Img: '/Img-Cardapio-NigirideAtum.png'
    },
    {
      Nome: "Combo Sushi Misto",
      Description:"Combinação de sashimi, uramaki, temaki e nigiri frescos e saborosos.",
      Valor: "R$ 55,00",
      Img: '/Img-Cardarpio-ComboSushi Misto.png'
    }
  ]
}
