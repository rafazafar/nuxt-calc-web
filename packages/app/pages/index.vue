<template>
  <div>
    <PageTitle title="支社長・営業所長報酬サポートツール" class="mb-12">
      <p v-on:mouseleave="stop" v-on:mouseover="play('ログインユーザー別に使用できるメニューを表示しています使用方法など、ご不明な点がある場合は、CCI営業人事Gまでお問い合わせください')">
        ログインユーザー別に使用できるメニューを表示しています<br />
        使用方法など、ご不明な点がある場合は、CCI営業人事Gまでお問い合わせください。
      </p>
    </PageTitle>

    <LazyMenuCardList title="業務機能" :menuItems="businessMenu" />

    <hr class="h-px my-2 bg-gray-400" />

    <LazyMenuCardList title="業務機能" :menuItems="headOfficeMenu" />

    <hr class="h-px my-2 bg-gray-400" />

    <LazyMenuCardList title="DevOnly" :menuItems="devMenu" />
  </div>
</template>
<script setup lang="ts">

const voice = useState<SpeechSynthesisVoice>('voice', () => undefined as unknown as SpeechSynthesisVoice)
const text = ref('Hello, everyone! Good morning!')
const pitch = ref(1)
const rate = ref(1)

const speech = useSpeechSynthesis(text, {
  voice,
  pitch,
  rate,
})

let synth: SpeechSynthesis

const voices = ref<SpeechSynthesisVoice[]>([])

const play = (txt?: string) => {
  if (txt) {
    text.value = txt
  }
  speech.speak()
}

const stop = () => {
  speech.stop()
}
onMounted(() => {
  if (speech.isSupported.value) {
    setTimeout(() => {
      synth = window.speechSynthesis
      voices.value = synth.getVoices()
      voice.value = voices.value[65]
    })
  }
})

const devMenu = [
  {
    title: "Playground",
    description: "Playground. Only visible during developement mode",
    to: "/playground",
    icon: "material-symbols-light:developer-mode-tv",
    buttonText: "Go to Playground",
  },
];
const businessMenu = [
  {
    title: "確定実績(明細)照会",
    description:
      "当年度の報酬計算の基礎となる業績データおよび支給額を月別に表示",
    to: "/employee-select",
    icon: "material-symbols-light:table-chart-view-outline",
  },
  {
    title: "報酬試算",
    description:
      "管理職の次年度用の業績評価給および年間のオーバーライド報酬(四半期毎の平均支給額)の試算",
    to: "/employee-select?target=simulation",
    icon: "circum:calculator-1",
  },
  {
    title: "支給年月別実績一覧照会",
    description: "管下の管理職の業績データおよび支給額を支給年月別に一覧表示",
    to: "/achievement-select",
    icon: "game-icons:checklist",
    buttonText: "職制・支給年月選択",
  },
];
const headOfficeMenu = [
  {
    title: "本社閲覧権限設定",
    description: "本社社員(使用者権限)の報酬サポートツール閲覧用",
    to: "/employee-permissions",
    icon: "material-symbols:lock-outline",
    buttonText: "本社閲覧権限設定画面",
  },
  {
    title: "データ補正指示",
    description: "データ補正の指示用画面",
    to: "/data-correction",
    icon: "codicon:tools",
    buttonText: "データ補正の指示画面",
  },
];
</script>
