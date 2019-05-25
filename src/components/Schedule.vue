<template>
  <div id="schedule">
    <article>
      <div class="breadcrumb">
        <router-link to="/">トップ</router-link> &gt; 活動日程
      </div>
      <section class="calendar">
        <iframe v-if="agenda_view" :src="BASE_URL + '&amp;mode=AGENDA'" style="border-width:0" frameborder="0" scrolling="no">お使いのブラウザがiframeをサポートしていないため、表示できません</iframe>
        <iframe v-else :src="BASE_URL + '&amp;mode=MONTH'" style="border-width:0" frameborder="0" scrolling="no">お使いのブラウザがiframeをサポートしていないため、表示できません</iframe>
      </section>
    </article>
    <footer-container></footer-container>
  </div>
</template>

<script>
import FooterContainer from '/components/FooterContainer.vue';

export default {
  name: 'schedule',
  components: {
    FooterContainer
  },
  data() {
    return {
      agenda_view: false,
      BASE_URL: 'https://calendar.google.com/calendar/embed?wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=b3JjaW51czQ2MjdAZ21haWwuY29t&amp;src=amEuamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%237986CB&amp;color=%237986CB&amp;showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;showNav=1&amp;showDate=0&amp;hl=ja'
    }
  },
  mounted() {
    if (window.innerWidth <= 600) {
      this.agenda_view = true;
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth <= 600) {
        this.agenda_view = true;
      } else {
        this.agenda_view = false;
      }
    });
  }
}
</script>

<style lang="scss">
#schedule > article {
  position: relative;
  width: 95%;
  max-width: 1200px;
  top: 0;
  left: 0;
  right: 0;
  margin: 80px auto 0;
}

.breadcrumb {
  margin-bottom: 30px;
}

.calendar {
  iframe {
    width: 100%;
    height: calc(100vh - 160px - 2.75em);
  }
}
</style>
