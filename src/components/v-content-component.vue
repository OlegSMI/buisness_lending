<template>
    <div class="content__class">
      <h1 class="content__head">
        Помощь любому бизнесу
      </h1>
      <div class="content__body">
        Контент с крутым описанием <br>
        Контент с крутым описанием <br>
        Контент с крутым описанием <br>
      </div>
      <div class="content__blocks">
        <div class="content__block first__block">
          <div class="text__block">Услуга 1</div>
          <div class="sub__text__block">Читать<fa :icon="['fas', 'arrow-right']"/></div>
        </div>
        <div class="content__block second__block">
          <div class="text__block">Услуга 2</div>
          <div class="sub__text__block">Читать<fa :icon="['fas', 'arrow-right']"/></div>
        </div>
        <div class="content__block third__block">
          <div class="text__block">Услуга 3</div>
          <div class="sub__text__block">Читать<fa :icon="['fas', 'arrow-right']"/></div>
        </div>
        <div class="content__block fourth__block">
          <div class="text__block">Услуга 4</div>
          <div class="sub__text__block">Читать<fa :icon="['fas', 'arrow-right']"/></div>
        </div>
        <div class="content__block fife__block">
          <div class="text__block">Услуга 5</div>
          <div class="sub__text__block">Читать<fa :icon="['fas', 'arrow-right']"/></div>
        </div>
      </div>
    </div>
    
  </template>
  
  <script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
  </script>

  