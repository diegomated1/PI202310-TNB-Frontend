// 2 cartas arma
// 1 cartas armadura
// 1 cartas item
// 5 cartas epicas
// 1 cartas heroe

export default interface IDeck{
  _id?: string,
  heroe?: string,
  armor?: string,
  sword_1?: string,
  sword_2?: string,
  epic_1?: string,
  epic_2?: string,
  epic_3?: string,
  epic_4?: string,
  epic_5?: string,
  item?: string,
}