# Demo React Context

## Beschrijving
Een context aanmaken voor een click-counter is natuurlijk alsof je een tosti doorsnijdt met een kettingzaag. Probeer je daarom voor te stellen dat dit een veel ingewikkeldere applicatie zou zijn, en dat we daarom Context gaan implementeren.

Er komen drie componenten in deze applicatie die allemaal toegang moeten hebben tot dezelfde data:
1. Button component die de count _verhoogt_
2. Button component die de count _verlaagt_
3. Result component die de count laat zien

## Stappen en bijbehorende branches

De volgende stappen worden in de verschillende branches doorlopen:
1. Aanmaken van de componenten en deze weergeven binnen het `<App>` component
2. `CounterContext` aanmaken (met de `createContext` functie, in een bestandje genaamd `CounterContext.js`
3. `CounterContext.Provider` maken en deze omwikkelen omde elementen op het hoogste niveau. Normaliter doen we dat in `index.js`, maar voor nu in `App.js` omdat we (voor nu) ook nog andere dingen nodig hebben.
4. Een data object maken die via de Provider de context in gaat
5. Consumerende componenten "abonneren" op de CounterContext met de `useContext` functie
6. Een apart functioneel component maken van de `CounterContext.Provider` (genaamd `CounterContextProvider`), zodat we alle logcia en state daarin kunnen plaatsen en onze `App.js` zich bezig kan houden met zijn eigen zaken. Deze ontvangt dan de property `children` zodat we dit component nog steeds om andere componenten heen kunnen wrappen, net als een button (zie voorbeeld hieronder). We plaatsen dit component daarom in `index.js` om het`<App />` component heen.
7. Nu kunnen we los met de data! We maken in het `<CounterContextProvider>` state aan voor de count, en twee aparte functies die de count kunnen verhogen en verlagen. Deze plaatsen we via de  `CounterContext.Provider` in de context.
8. Nu kunnen we onze buttons ook abonneren om de context door de bijbehorende functie te gebruiken.

## Uitleg property "children"
Een gewone button ziet er zo uit:
```javascript
<button type="button">
  Klik mij!
</button>
```

Wanneer we een component van deze button maken, maar we willen nog steeds ons component op dezelfde manier om tekst (of andere elementen) heen kunnen plaatsen, gebruik je de `children` prop:

```javascript
function ButtonComponent({ children }) {
  return (
    <button type="button">
      {children}
    </button>
  )
}
```

Door die property kunnen we ons ButtonComponent nu op dezelfde manier om andere tekst heen wrappen:

// in App.js (of ergens anders):
```javascript
<ButtonComponent>
  Klik mij!
</ButtonComponent>
<ButtonComponent>
  Mij ook!
</ButtonComponent>
```