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
      <div class="flex flex-row">
        <!--PROFILE-->
        <div class="w-full mr-10 lg:w-3/4">
          <div class="w-full">
            <!--First Post-->
            <div v-for="post in 3" :key="post" class="flex flex-col px-4">
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
                <img src="https://d-board-nextjs.mobifica.com/images/post-3.jpg" alt="media" class="object-cover h-48 w-full">
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
                <div class="flex items-start justify-start space-x-4 p-4">
                  <div class="flex-shrink-0 w-8">
                    <img src="https://d-board-nextjs.mobifica.com/images/faces/m9.png" alt="media" class="h-8 w-full shadow-lg rounded-full ring">
                  </div>
                  <div class="flex flex-col lg:flex-row">
                    <div class="flex flex-col w-full">
                      <div class="text-sm font-bold">Schowalter</div>
                      <span class="text-sm">onem ea. Voluptas vel tempore rerum quae eveniet voluptatem. Quasi tenetur velit et expedita ea cumque ipsam est amet.</span>
                    </div>
                    <div class="flex-shrink-0 justify-end">
                      <div class="text-gray-500 lg:ml-1">a few seconds ago</div>
                    </div>
                  </div>
                </div>
                <div class="flex items-start justify-start space-x-4 p-4">
                  <div class="flex-shrink-0 w-8">
                    <img src="https://d-board-nextjs.mobifica.com/images/faces/m1.png" alt="media" class="h-8 w-full shadow-lg rounded-full ring">
                  </div>
                  <div class="flex flex-col lg:flex-row">
                    <div class="flex flex-col w-full">
                      <div class="text-sm font-bold">Clyde</div>
                      <span class="text-sm">Temporibus et occaecati. Asperiores officiis placeat harum fuga culpa tempora. Facere veritatis ullam fugit officia hic amet maxime error voluptatum. Modi et et necessitatibus non laborum sed dicta distinctio voluptatem.</span>
                    </div>
                    <div class="flex-shrink-0 justify-end">
                      <div class="text-gray-500 lg:ml-1">an hour ago</div>
                    </div>
                  </div>
                </div>
                <div class="flex items-start justify-start space-x-4 p-4">
                  <div class="flex-shrink-0 w-8">
                    <img src="https://d-board-nextjs.mobifica.com/images/faces/w1.png" alt="media" class="h-8 w-full shadow-lg rounded-full ring">
                  </div>
                  <div class="flex flex-col lg:flex-row">
                    <div class="flex flex-col w-full">
                      <div class="text-sm font-bold">Bonnie</div>
                      <span class="text-sm">Qui ab magni. Tempore eos exercitationem ea. Voluptas vel tempore rerum quae eveniet voluptatem. Quasi tenetur velit et expedita ea cumque ipsam est amet.</span>
                    </div>
                    <div class="flex-shrink-0 justify-end">
                      <div class="text-gray-500 lg:ml-1">2 hours ago</div>
                    </div>
                  </div>
                </div>
                <div class="flex items-start justify-start space-x-4 p-4">
                  <div class="flex-shrink-0 w-8">
                    <img src="https://d-board-nextjs.mobifica.com/images/faces/w6.png" alt="media" class="h-8 w-full shadow-lg rounded-full ring">
                  </div>
                  <div class="flex flex-col lg:flex-row">
                    <div class="flex flex-col w-full">
                      <div class="text-sm font-bold">Clarice</div>
                      <span class="text-sm">Qui ab magni. Tempore eos exercitationem ea. Voluptas vel tempore rerum quae eveniet voluptatem. Quasi tenetur velit et expedita ea cumque ipsam est amet.</span>
                    </div>
                    <div class="flex-shrink-0 justify-end">
                      <div class="text-gray-500 lg:ml-1">5 hours ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col px-4"></div>

            <div class="flex flex-col px-4"></div>
            <div class="flex flex-col px-4"></div>
          </div>
        </div>

        <!--FRIENDS-->
        <div class="w-full lg:w-1/4">
          <div class="w-full">
            <div class="mb-2 uppercase font-bold text-xs tracking-wider flex flex-row items-center justify-start w-full uppercase">Friends</div>
            <div class="w-full">
              <!--First sets-->
              <div v-for="people in 10" :key="people" class="flex items-center justify-start p-2 space-x-4">
                <div class="flex-shrink-0 w-8">
                  <img src="https://d-board-nextjs.mobifica.com/images/faces/w5.png" alt="media" class="h-8 w-full rounded-full ring-green">
                </div>
                <div class="flex flex-col w-full">
                  <div class="text-sm font-bold">Princess Isabel Young</div>
                </div>
                <div class="flex-shrink-0 text-xs text-gray-500">Online</div>
              </div>
              <!--Second sets-->
              <div v-for="people in 10" :key="people" class="flex items-center justify-start p-2 space-x-4">
                <div class="flex-shrink-0 w-8">
                  <img src="data:image/jpeg;base64,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" alt="media" class="h-8 w-full rounded-full ring-red">
                </div>
                <div class="flex flex-col w-full">
                  <div class="text-sm font-bold">Dom Pedro II</div>
                </div>
                <div class="flex-shrink-0 text-xs text-gray-500">Offline</div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
.ring-green {
  box-shadow: 0 0 0 3px #6ee7b7;
}
.ring-red {
  box-shadow: 0 0 0 3px #e55252;
}
</style>
