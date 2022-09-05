<template>
    <div class="callback__block">
        <form id="signup-form">
            <div class="">
                <div class="input__area">
                    <label class="col-form-label col-form-label-lg">Ваше имя<fa :icon="['fas', 'circle']" class="label__icon"/></label>
                    <input type="text" class="form-control form-control-lg">
                </div>
                <div class="input__area">
                    <label class="col-form-label col-form-label-lg">Email<fa :icon="['fas', 'circle']" class="label__icon"/></label>
                    <input type="email" class="form-control form-control-lg">
                </div>
                <div class="input__area">
                    <label class="col-form-label col-form-label-lg">Телефон<fa :icon="['fas', 'circle']" class="label__icon"/></label>
                    <input type="text" class="form-control form-control-lg">
                </div>
                <div class="button__area">
                    <button class="btn btn-vue btn-lg col-4">Заказать звонок</button>
                </div>
            </div>
        </form>
    </div>
    <div class="callback__image">
        Тут топовая фотка
    </div>
</template>