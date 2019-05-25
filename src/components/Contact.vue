<template>
  <div id="contact">
    <article>
      <div class="breadcrumb">
        <router-link to="/">トップ</router-link> &gt; お問い合わせ
      </div>
      <p>下記フォームに必要事項を入力後、確認ボタンを押してください。</p>
      <form method="post" action="/mail.php">
        <p class="required">
          <label for="ct_name">お名前:</label>
          <input id="ct_name" size="20" type="name" name="お名前" placeholder="姓 名" required/>
        </p>
        <p class="required">
          <label for="ct_email">Email(半角):</label>
          <input id="ct_email" :class="{invalid}" size="40" type="email" name="Email" placeholder="hogehoge@example.com" @blur="validate" required/>
        </p>
        <p v-show="invalid" class="invalid_text">無効なメールアドレスです。他のアドレスを指定してください。</p>
        <p>
          <label for="ct_name">所属:</label>
          <input id="ct_name" size="20" type="name" name="所属" placeholder="企業名、学校名、etc."/>
        </p>
        <p>
          <label for="ct_title">件名:</label>
          <input id="ct_title" size="40" type="text" name="件名" />
        </p>
        <p class="required">
          <label for="ct_contents">お問い合わせ内容:</label>
          <textarea id="ct_contents" name="お問い合わせ内容" cols="40" rows="8" wrap="soft" placeholder="問い合わせ内容は具体的に入力してください" required></textarea>
        </p>
        <p>
        <p><font style="color:#FF0000">*</font>は必須項目です。</p>
        <p>※内容を送信する前に、必ず<a href="/privacy-policy" target="_blank">プライバシーポリシー</a>をご確認ください。</p>
        <p>
          <input type="submit" value="　確認　" />
          <input type="reset" value="リセット" />
        </p>
      </form>
    </article>
    <footer-container></footer-container>
  </div>
</template>

<script>
import FooterContainer from '/components/FooterContainer.vue';

export default {
  name: 'contact',
  components: {
    FooterContainer
  },
  data() {
    return {
      invalid: false
    }
  },
  methods: {
    validate(e) {
      if (e.target.value == '') {
        this.invalid = false;
      } else {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        this.invalid = !expression.test(String(e.target.value).toLowerCase());
      }
    }
  }
}
</script>

<style lang="scss">
#contact > article {
  position: relative;
  width: 90%;
  max-width: 1200px;
  top: 0;
  left: 0;
  right: 0;
  margin: 80px auto 0px;

  form {
    p {
      padding: 0.2em 0;

      &.invalid_text {
        color: red;
        font-weight: bold;
      }
    }

    p::after, p::before {
      display: table;
      content: "";
      clear: both;
    }

    label {
      margin: 0;
      padding: 10px 0;
      display: inline-block;
      float: left;
      min-width: 170px;
      line-height: 1.2em;
    }

    label + input, textarea {
      margin: 0;
      display: inline-block;
      float: left;
      padding: 10px;
      max-width: calc(100% - 22px);
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.2em;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: solid 1px #ced4da;
      border-radius: 0.25rem;
      box-shadow: inset 0 1px 3px #ddd;

      &:focus {
        border-color: #80bdff;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
      }

      &.invalid {
        border-color: #ff8080;
        box-shadow: 0 0 0 0.2rem rgba(255, 0, 0, 0.3);
      }
    }

    label + input {
      width: 600px;
    }

    textarea {
      width: 800px;
    }

    p.required > label::before {
      content: "*";
      color: red;
    }

    input[type="submit"], input[type="reset"] {
      display: inline-block;
      text-align: center;
      margin: 10px;
      padding: 0.6em 0.8em;
      border-radius: 4px;
      color: white;
      font-weight: bolc;
      border: none;
      cursor: pointer;
      box-shadow: 1px 1px 1px 1px rgba(100, 100, 100, 0.3);
      /* doiuse-disable */
      outline: 0;
      /* doiuse-enable */

      &:focus {
        box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.45);
      }
    }

    input[type="submit"] {
      border: solid 1px #8cb04a;
      background-color: #9ec34b;

      &:hover {
        background-color: #8cb04a;
      }
    }

    input[type="reset"] {
      border: solid 1px #b05b5b;
      background-color: #cc6565;

      &:hover {
        background-color: #b05b5b;
      }
    }

    @media (max-width: 680px) {
      p {
        padding: 0;
        margin: 0.2em 0;
      }
    }
    @media (min-width: 681px) {
      background-color: #f5f5f5;
      padding: 20px;
    }
  }
}
</style>
