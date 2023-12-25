<template>
  <div class="grid content-center justify-center">
    <div class="border border-primary mt-4">
      <h1
        class="p-2 px-6 bg-primary text-primary-content text-2xl font-semibold"
      >
        社員指定
      </h1>
      <div class="p-4">
        <form>
          <h3 class="font-semibold text-xl">直接入力</h3>
          <h4>社員番号</h4>
          <div class="flex gap-4">
            <input
              type="text"
              class="input input-bordered"
              placeholder="社員番号"
              v-model="inputEmployeeNumber"
            />
            <button
              type="button"
              class="btn btn-primary btn-outline px-8 disabled:bg-white"
              :disabled="inputEmployeeNumber === ''"
              @click="handleEmployeeNumberInput"
            >
              指定
            </button>
          </div>
        </form>
        <div class="divider divider-neutral-content text-sm">または</div>
        <div class="flex flex-col gap-4" v-auto-animate>
          <div>
            <h3 class="font-semibold text-xl">社員絞り込み</h3>
            <h4>対象職制</h4>
            <div class="flex gap-4 mt-2">
              <button
                class="btn btn-primary btn-outline px-8 btn-sm"
                :class="{
                  'btn-active': selectedManagerType === 'branchManager',
                }"
                @click="selectedManagerType = 'branchManager'"
              >
                支社長
              </button>
              <button
                class="btn btn-primary btn-outline px-8 btn-sm"
                :class="{
                  'btn-active': selectedManagerType === 'salesOfficeManager',
                }"
                @click="selectedManagerType = 'salesOfficeManager'"
              >
                営業所長
              </button>
            </div>
          </div>
          <div>
            <p>局</p>
            <select
              name="bureau"
              class="select disabled:border-gray-300 w-full"
              disabled
            >
              <option selected>東北北海道営業局</option>
            </select>
          </div>
          <div>
            <p>支社</p>
            <select
              name="branchOffice"
              class="select disabled:border-gray-300 w-full"
              disabled
            >
              <option selected>札幌ｺｰﾙｾﾝﾀｰ</option>
            </select>
          </div>
          <div v-if="selectedManagerType === 'salesOfficeManager'">
            <p>局</p>
            <select name="salesOffice" class="select select-bordered w-full">
              <option>保険金ｺﾝﾀｸﾄｾﾝﾀｰ</option>
              <option>札幌ﾃﾞｨｽﾄﾘﾋﾞｭｰｼｮﾝｲﾝﾊﾞｳﾝﾄﾞ</option>
              <option>札幌ｶｽﾀﾏｰｲﾝﾊﾞｳﾝﾄﾞ</option>
              <option selected>東北北海道営業局</option>
            </select>
          </div>
          <div class="divider my-2"></div>
          <div class="grid grid-cols-2">
            <div>
              <p class="font-semibold">社員氏名</p>
              <p class="font-light">502 | 日本橋営業所</p>
            </div>
            <div>
              <p class="font-semibold">社員氏名</p>
              <p class="font-light">21366431 | AXA 太郎</p>
            </div>
          </div>
          <button class="btn btn-primary">次へ進む</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const inputEmployeeNumber = useState("inputEmployeeNumber", () => "");
const selectedManagerType = useState("managerType", () => "branchManager");

const handleEmployeeNumberInput = () => {
  alert(inputEmployeeNumber.value);
};
</script>
