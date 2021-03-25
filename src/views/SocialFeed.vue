<template>
  <section class="min-h-screen w-full p-4">
    <div class="w-full p-4 mb-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <!--DATA PROFILE-->
      <div class="w-full mb-4">
        <div class="relative flex items-center justify-start h-64 w-full overflow-hidden user-widget-2">
          <img src="../assets/img/capa.jpeg" alt="media" class="object-cover h-48 w-full absolute inset-0 z-1">
          <div class="w-full bottom-section z-2 absolute  bottom-0 left-0 right-0 h-20 px-8">
            <div class="flex items-center justify-center">
              <div class="flex-shrink-0 w-24">
                <img src="../assets/img/perfil.png" alt="ítalo Henrique" class="rounded-full h-24 w-24 ring user-img">
              </div>
              <div class="ml-4 w-full ">
                <div class="font-light text-xs text-gray-500 uppercase">Members</div>
                <div class="text-lg font-bold">Ítalo Henrique</div>
              </div>
              <div class="hidden lg:flex flex-shrink-0 space-x-2">
                <button class="btn btn-default rounded-lg bg-blue-500 hover:bg-blue-600 text-white">Subscribe</button>
                <button class="btn btn-default rounded-lg bg-blue-500 hover:bg-blue-600 text-white">Follow</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--CONTENT-->
      <div class="w-full lg:w-3/4">
        <div class="w-full">
          <!--First Post-->
          <div class="flex flex-col px-4">
            <div class="flex flex-row items-start justify-start mb-2">
              <div class="flex-shrink-0 w-8 mt-1 mr-4">
                <img src="https://d-board-nextjs.mobifica.com/images/faces/w3.png" alt="media" class="h-8 w-full shadow-lg rounded-full ring">
              </div>
              <div class="flex flex-grow flex-col w-full">
                <div class="text-sm font-bold">Aperiam animi minima inventore autem.</div>
                <div class="flex flex-row items-center justify-start mb-2">
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-gray-500" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  <div class="text-gray-500 ml-1">a few seconds ago</div>
                </div>
              </div>
            </div>
            <div class="w-full mb-4">Officia sit harum excepturi earum eos non. Tempore odio facilis est facilis molestiae. Modi repellendus quisquam quis quis. Recusandae officiis quis illum eum similique aliquid debitis repellendus. Voluptate quod et nihil sed ipsa consequuntur aut iste. Sapiente eaque perferendis quasi.</div>
            <div class="w-full mb-4">
              <img src="https://d-board-nextjs.mobifica.com/images/post-1.jpg" alt="media" class="object-cover h-48 w-full">
            </div>
            <!--like / share / comment-->
            <div class="flex flex-row items-center justify-start mb-4">
              <!--LIKE-->
              <div class="btn btn-default btn-rounded cursor-pointer btn-icon">
                <i class="far text-xl fa-thumbs-up"></i>
                <span class="ml-2">Like</span>
              </div>
              <!--SHARE-->
              <div class="btn btn-default btn-rounded cursor-pointer btn-icon">
                <i class="fas text-xl fa-share-alt"></i>
                <span class="ml-2">Share</span>
              </div>
              <!--COMMENT-->
              <div class="btn btn-default btn-rounded cursor-pointer btn-icon">
                <i class="far text-xl fa-comment"></i>
                <span class="ml-2">Comment</span>
              </div>
              <!--LIKES-->
              <div class="flex flex-row items-center justify-end ml-auto">
                <img src="https://d-board-nextjs.mobifica.com/images/faces/w3.png" alt="media" class="h-10 w-10 rounded-full border-2 border-white -ml-3">
                <img src="https://d-board-nextjs.mobifica.com/images/faces/w1.png" alt="media" class="h-10 w-10 rounded-full border-2 border-white -ml-3">
                <img src="https://d-board-nextjs.mobifica.com/images/faces/m1.png" alt="media" class="h-10 w-10 rounded-full border-2 border-white -ml-3">
                <img src="https://d-board-nextjs.mobifica.com/images/faces/m9.png" alt="media" class="h-10 w-10 rounded-full border-2 border-white -ml-3">
              </div>
            </div>
            <!--Input Comment -->
            <div class="flex flex-row items-center justify-between mb-8">
              <div class="flex-shrink-0 w-8">
                <img src="../assets/img/perfil.png" alt="media" class="h-8 w-full shadow-lg rounded-full ring">
              </div>
              <input name="name" type="text" class="w-full text-sm leading-6 border-0 bg-gray-100 mx-3 p-2 focus:outline-none" placeholder="Enter something...">
              <div class="flex flex-row items-center justify-end space-x-1">
                <button class="btn btn-circle text-2xl focus:outline-none"><i class='bx bx-camera'></i></button>
                <button class="btn btn-circle text-xl focus:outline-none"><i class="fas fa-paperclip"></i></button>
                <button class="btn btn-circle text-2xl focus:outline-none"><i class='bx bx-microphone' ></i></button>
              </div>
            </div>
            <!--Others Comment-->
            <div class="w-full mb-4">

            </div>
          </div>

          <div class="flex flex-col px-4"></div>

          <div class="flex flex-col px-4"></div>
          <div class="flex flex-col px-4"></div>
        </div>
      </div>

      <div class="w-full lg:w-3/4"></div>
    </div>
  </section>
</template>

<script>

export default {
  name: "SocialFeed",
  computed: {

  }
}
</script>

<style scoped>
.user-img {
  box-shadow: 0 0 0 5px #fff!important;
  transform: translateY(-1.75rem);
}
</style>
