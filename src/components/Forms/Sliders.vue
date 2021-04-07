<template>
  <div class="min-h-screen w-full p-4">
    <!--TITLE-->
    <div class="section-title w-full mb-6 pt-3">
      <div class="flex flex-row items-center justify-between mb-4">
        <div class="flex flex-col">
          <div class="text-xs uppercase font-light text-gray-500">FORMS</div>
          <div class="text-xl font-bold">Sliders</div>
        </div>
      </div>
    </div>

    <section class="w-full p-4 mb-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Default slider</div>
          <div class="text-sm font-bold">
            <span>It's DefaultSlider component for a simple slider</span>
          </div>
        </div>
      </div>
      
      <div class="flex flex-wrap w-full">
        <div class="w-full lg:w-1/3">
          <div class="rc-slider slider-blue  box-border relative h-3.5 w-full rounded-md">
            <div class="rc-slider-rail  absolute rounded-md" style="height: 4px"></div>
            <div class="rc-slider-track" style="left: 0%;right: auto;width: 43%;"></div>
            <div class="rc-slider-step"></div>
            <div tabindex="0" class="rc-slider-handle" role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="41" aria-disabled="false" style="left: 41%; right: auto; transform: translateX(-50%);"></div>
            <div class="rc-slider-mark"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
name: "Sliders"
}
</script>

<style scoped>
.rc-slider {
  position: relative;
  height: 14px;
  padding: 5px 0;
  width: 100%;
  border-radius: 6px;
  touch-action: none;
}
.rc-slider-rail, .rc-slider-track {
  position: absolute;
  height: 4px;
  border-radius: 6px;
}
.rc-slider-rail {
  width: 100%;
  background-color: #e5e7eb;
}
.slider-blue .rc-slider-track {
  background-color: rgba(59,130,246,1);
}
.rc-slider-step {
  position: absolute;
  width: 100%;
  height: 4px;
  background: transparent;
}
</style>