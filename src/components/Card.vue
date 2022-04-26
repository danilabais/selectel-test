<template>
  <a-card title="Заголовок карточки" style="width: 295px">
      <a-typography-paragraph>
        Задайте любой вопрос о продукте, его настройках, трудностях в работе или
        неполадках. Поддержка работает 24/7, специалисты ответят в течение 15
        минут и помогут со всем разобраться.
      </a-typography-paragraph>
      <a-space :size="16" />
        <a-row class="chips">
            <a-tag class="chips__name">Василий Пупкин</a-tag><a-tag class="chips__date">24 февраля 2022</a-tag>
        </a-row>
    </a-card>
</template>

<script>
export default {

}
</script>

<style>

.chips {
  margin-top: 16px !important;
}
.chips__name {
  background: #092433 !important;
  border-radius: 10px !important;
  font-weight: 400 !important;
  font-size: 12px !important;
  line-height: 20px !important;
  color: #fff !important;
}

.chips__date {
  border-radius: 10px !important;
  font-weight: 400 !important;
  font-size: 12px !important;
  line-height: 20px !important;
  border: 1px solid #e8e8e8;
  color: #595959 !important;
}

</style>