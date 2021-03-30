<template>
  <div class="min-h-screen w-full p-4">
    <!--TITLE-->
    <div class="section-title w-full mb-6 pt-3">
      <div class="flex flex-row items-center justify-between mb-4">
        <div class="flex flex-col">
          <div class="text-xs uppercase font-light text-gray-500">UI Elements</div>
          <div class="text-xl font-bold">Images</div>
        </div>
      </div>
    </div>
    <!--Rounded Images-->
    <section class="w-full p-4 mb-6 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Rounded images</div>
          <div class="text-sm font-bold">
            <span>Use the <code>.rounded</code> class for rounded images</span>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-start items-start">
        <img src="https://d-board-nextjs.mobifica.com/images/faces/w8.png" alt="media" class="h-8 rounded max-w-full mr-2 mb-2">
        <img src="https://d-board-nextjs.mobifica.com/images/faces/w8.png" alt="media" class="h-16 rounded max-w-full mr-2 mb-2">
        <img src="https://d-board-nextjs.mobifica.com/images/faces/w8.png" alt="media" class="h-20 rounded max-w-full mr-2 mb-2">
        <img src="https://d-board-nextjs.mobifica.com/images/faces/w8.png" alt="media" class="h-24 rounded max-w-full mr-2 mb-2">
        <img src="https://d-board-nextjs.mobifica.com/images/faces/w8.png" alt="media" class="h-32 rounded max-w-full mr-2 mb-2">
      </div>
    </section>

    <!--Circular Images-->
    <section class="w-full p-4 mb-6 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Rounded images</div>
          <div class="text-sm font-bold">
            <span>Use the <code>.rounded-full</code> class for circular images</span>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-start items-start">
        <img src="https://d-board-nextjs.mobifica.com/images/faces/w8.png" alt="media" class="h-8 rounded-full max-w-full mr-2 mb-2">
        <img src="https://d-board-nextjs.mobifica.com/images/faces/w8.png" alt="media" class="h-16 rounded-full max-w-full mr-2 mb-2">
        <img src="https://d-board-nextjs.mobifica.com/images/faces/w8.png" alt="media" class="h-20 rounded-full max-w-full mr-2 mb-2">
        <img src="https://d-board-nextjs.mobifica.com/images/faces/w8.png" alt="media" class="h-24 rounded-full max-w-full mr-2 mb-2">
        <img src="https://d-board-nextjs.mobifica.com/images/faces/w8.png" alt="media" class="h-32 rounded-full max-w-full mr-2 mb-2">
      </div>
    </section>

    <!--Raised Images-->
    <section class="w-full p-4 mb-6 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Raised images</div>
          <div class="text-sm font-bold">
            <span>Use the <code>.shadow-2xl</code> class for raised images</span>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-start items-start">
        <img src="https://d-board-nextjs.mobifica.com/images/faces/w8.png" alt="media" class="h-8 rounded-full shadow-2xl max-w-full mr-2 mb-2">
        <img src="https://d-board-nextjs.mobifica.com/images/faces/w8.png" alt="media" class="h-16 rounded-full shadow-2xl max-w-full mr-2 mb-2">
        <img src="https://d-board-nextjs.mobifica.com/images/faces/w8.png" alt="media" class="h-20 rounded-full shadow-2xl max-w-full mr-2 mb-2">
        <img src="https://d-board-nextjs.mobifica.com/images/faces/w8.png" alt="media" class="h-24 rounded-full shadow-2xl max-w-full mr-2 mb-2">
        <img src="https://d-board-nextjs.mobifica.com/images/faces/w8.png" alt="media" class="h-32 rounded-full shadow-2xl max-w-full mr-2 mb-2">
      </div>
    </section>

    <!--Bordered Images-->
    <section class="w-full p-4 mb-6 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Bordered images</div>
          <div class="text-sm font-bold">
            <span>Use the <code>.ring-color</code> class for raised images</span>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-start items-start">
        <img src="https://d-board-nextjs.mobifica.com/images/faces/w8.png" alt="media" class="h-16 rounded-full max-w-full mr-2 mb-2 ring">
        <img src="https://d-board-nextjs.mobifica.com/images/faces/w8.png" alt="media" class="h-16 rounded-full max-w-full mr-2 mb-2 ring ring-green-400">
        <img src="https://d-board-nextjs.mobifica.com/images/faces/w8.png" alt="media" class="h-16 rounded-full max-w-full mr-2 mb-2 ring ring-red-400">
        <img src="https://d-board-nextjs.mobifica.com/images/faces/w8.png" alt="media" class="h-16 rounded-full max-w-full mr-2 mb-2 ring ring-black">
        <img src="https://d-board-nextjs.mobifica.com/images/faces/w8.png" alt="media" class="h-16 rounded-full max-w-full mr-2 mb-2 ring ring-yellow-400">
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Images"
}

</script>

<style scoped>

</style>
