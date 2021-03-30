<template>
  <div class="min-h-screen w-full p-4">
    <!--TITLE-->
    <div class="section-title w-full mb-6 pt-3">
      <div class="flex flex-row items-center justify-between mb-4">
        <div class="flex flex-col">
          <div class="text-xs uppercase font-light text-gray-500">UI Elements</div>
          <div class="text-xl font-bold">Dropdowns</div>
        </div>
      </div>
    </div>
    <!--Bottom Position-->
    <section class="w-full p-4 mb-6 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Dropdowns</div>
          <div class="text-sm font-bold">
            <span>Bottom Position</span>
          </div>
        </div>
      </div>
      <div class="flex flex-row mb-4">
        <div class="w-1/3">
          <div class="z-50 hidden dropdown lg:flex relative">
            <button @click.prevent="dropLeftAc" class="btn-primary uppercase p-2 focus:outline-none">dropdown left</button>
            <div v-show="dropLeft" class="absolute mt-16 bg-gray-50 border-2 rounded border-gray-100 transition shadow-2xl" style="position: absolute; inset: 0 auto auto 0; transform: translate(0px, -27px);">
              <div class="dropdown-content w-64 bottom-start">
                <div class="font-bold p-4 uppercase text-gray-700 text-sm leading-5">Apps</div>
                <div class="flex flex-wrap">
                  <!--ICON HOME-->
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-gray-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span class="text-xs">Home</span>
                  </div>
                  <!--ICON ACCOUNT-->
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-blue-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>

                    <span class="text-xs">Account</span>
                  </div>
                  <!--ICON COMMENTS-->
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-orange-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    <span class="text-xs">Comments</span>
                  </div>
                  <!--ICON SETTINGS-->
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-green-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                    <span class="text-xs">Settings</span>
                  </div>
                  <!--ICON MAPS-->
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-red-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <span class="text-xs">Maps</span>
                  </div>
                  <!--ICON TWITTER-->
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-blue-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    <span class="text-xs">Twitter</span>
                  </div>
                  <!--ICON FACEBOOK-->
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-blue-800" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    <span class="text-xs">Facebook</span>
                  </div>
                  <!--ICON INSTAGRAM-->
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-pink-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    <span class="text-xs">Instagram</span>
                  </div>
                  <!--ICON LINKEDIN-->
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-blue-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    <span class="text-xs">Linkedin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/3">
          <div class="z-50 hidden lg:flex relative">
            <button @click.prevent="dropRightAc" class="btn-primary uppercase p-2 focus:outline-none">dropdown left</button>
            <div v-show="dropRight" class="absolute mt-16 bg-gray-50 border-2 rounded border-gray-100 transition shadow-2xl" style="position: absolute; inset: 0 auto auto 0; transform: translate(120px, -27px);">
              <div class="dropdown-content w-64 bottom-start">
                <div class="font-bold p-4 uppercase text-gray-700 text-sm leading-5">Apps</div>
                <div class="flex flex-wrap">
                  <!--ICON HOME-->
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-gray-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span class="text-xs">Home</span>
                  </div>
                  <!--ICON ACCOUNT-->
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-blue-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>

                    <span class="text-xs">Account</span>
                  </div>
                  <!--ICON COMMENTS-->
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-orange-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    <span class="text-xs">Comments</span>
                  </div>
                  <!--ICON SETTINGS-->
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-green-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                    <span class="text-xs">Settings</span>
                  </div>
                  <!--ICON MAPS-->
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-red-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <span class="text-xs">Maps</span>
                  </div>
                  <!--ICON TWITTER-->
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-blue-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    <span class="text-xs">Twitter</span>
                  </div>
                  <!--ICON FACEBOOK-->
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-blue-800" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    <span class="text-xs">Facebook</span>
                  </div>
                  <!--ICON INSTAGRAM-->
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-pink-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    <span class="text-xs">Instagram</span>
                  </div>
                  <!--ICON LINKEDIN-->
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-blue-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    <span class="text-xs">Linkedin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Right Position-->
    <!--    <section class="w-full p-4 mb-6 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Dropdowns</div>
          <div class="text-sm font-bold">
            <span>Right Position</span>
          </div>
        </div>
      </div>
      <div class="flex flex-row mb-4">
        <div class="w-1/3">
          <div class="z-40 hidden lg:flex relative">
            <button @click.prevent="dropEndAc" class="btn-primary uppercase p-2 focus:outline-none">dropdown end</button>
            <div v-show="dropEnd" class="absolute mt-16 bg-gray-50 border-2 rounded border-gray-100 transition shadow-2xl" style="position: absolute; inset: 0 auto auto 0; transform: translate(120px, -325px);">
              <div class="dropdown-content w-64 bottom-start">
                <div class="font-bold p-4 uppercase text-gray-700 text-sm leading-5">Apps</div>
                <div class="flex flex-wrap">
                  &lt;!&ndash;ICON HOME&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-gray-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span class="text-xs">Home</span>
                  </div>
                  &lt;!&ndash;ICON ACCOUNT&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-blue-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>

                    <span class="text-xs">Account</span>
                  </div>
                  &lt;!&ndash;ICON COMMENTS&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-orange-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    <span class="text-xs">Comments</span>
                  </div>
                  &lt;!&ndash;ICON SETTINGS&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-green-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                    <span class="text-xs">Settings</span>
                  </div>
                  &lt;!&ndash;ICON MAPS&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-red-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <span class="text-xs">Maps</span>
                  </div>
                  &lt;!&ndash;ICON TWITTER&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-blue-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    <span class="text-xs">Twitter</span>
                  </div>
                  &lt;!&ndash;ICON FACEBOOK&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-blue-800" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    <span class="text-xs">Facebook</span>
                  </div>
                  &lt;!&ndash;ICON INSTAGRAM&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-pink-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    <span class="text-xs">Instagram</span>
                  </div>
                  &lt;!&ndash;ICON LINKEDIN&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-blue-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    <span class="text-xs">Linkedin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/3">
          <div class="z-40 hidden lg:flex relative">
            <button @click.prevent="dropStartAc" class="btn-primary uppercase p-2 focus:outline-none">dropdown start</button>
            <div v-show="dropStart" class="absolute mt-16 bg-gray-50 border-2 rounded border-gray-100 transition shadow-2xl" style="position: absolute; inset: 0 auto auto 0; transform: translate(130px, -27px);">
              <div class="dropdown-content w-64 bottom-start">
                <div class="font-bold p-4 uppercase text-gray-700 text-sm leading-5">Apps</div>
                <div class="flex flex-wrap">
                  &lt;!&ndash;ICON HOME&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-gray-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span class="text-xs">Home</span>
                  </div>
                  &lt;!&ndash;ICON ACCOUNT&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-blue-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>

                    <span class="text-xs">Account</span>
                  </div>
                  &lt;!&ndash;ICON COMMENTS&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-orange-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    <span class="text-xs">Comments</span>
                  </div>
                  &lt;!&ndash;ICON SETTINGS&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-green-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                    <span class="text-xs">Settings</span>
                  </div>
                  &lt;!&ndash;ICON MAPS&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-red-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <span class="text-xs">Maps</span>
                  </div>
                  &lt;!&ndash;ICON TWITTER&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-blue-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    <span class="text-xs">Twitter</span>
                  </div>
                  &lt;!&ndash;ICON FACEBOOK&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-blue-800" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    <span class="text-xs">Facebook</span>
                  </div>
                  &lt;!&ndash;ICON INSTAGRAM&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-pink-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    <span class="text-xs">Instagram</span>
                  </div>
                  &lt;!&ndash;ICON LINKEDIN&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-blue-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    <span class="text-xs">Linkedin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>-->

    <!--Left Position-->
    <!--    <section class="w-full p-4 mb-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Dropdowns</div>
          <div class="text-sm font-bold">
            <span>Left Position</span>
          </div>
        </div>
      </div>
      <div class="flex flex-row mb-4">
        <div class="w-1/3">
          <div class="z-30 hidden lg:flex relative">
            <button @click.prevent="dropEndLeftAc" class="btn-primary uppercase p-2 focus:outline-none">dropdown end</button>
            <div v-show="dropEndLeft" class="absolute mt-16 bg-gray-50 border-2 rounded border-gray-100 transition shadow-2xl" style="position: absolute; inset: 0 auto auto 0; transform: translate(0px, -27px);">
              <div class="dropdown-content w-64 bottom-start">
                <div class="font-bold p-4 uppercase text-gray-700 text-sm leading-5">Apps</div>
                <div class="flex flex-wrap">
                  &lt;!&ndash;ICON HOME&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-gray-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span class="text-xs">Home</span>
                  </div>
                  &lt;!&ndash;ICON ACCOUNT&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-blue-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>

                    <span class="text-xs">Account</span>
                  </div>
                  &lt;!&ndash;ICON COMMENTS&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-orange-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    <span class="text-xs">Comments</span>
                  </div>
                  &lt;!&ndash;ICON SETTINGS&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-green-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                    <span class="text-xs">Settings</span>
                  </div>
                  &lt;!&ndash;ICON MAPS&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-red-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <span class="text-xs">Maps</span>
                  </div>
                  &lt;!&ndash;ICON TWITTER&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-blue-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    <span class="text-xs">Twitter</span>
                  </div>
                  &lt;!&ndash;ICON FACEBOOK&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-blue-800" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    <span class="text-xs">Facebook</span>
                  </div>
                  &lt;!&ndash;ICON INSTAGRAM&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-pink-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    <span class="text-xs">Instagram</span>
                  </div>
                  &lt;!&ndash;ICON LINKEDIN&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-blue-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    <span class="text-xs">Linkedin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/3">
          <div class="z-30 hidden lg:flex relative">
            <button @click.prevent="dropEndStartAc" class="btn-primary uppercase p-2 focus:outline-none">dropdown start</button>
            <div v-show="dropStartRight" class="absolute mt-16 bg-gray-50 border-2 rounded border-gray-100 transition shadow-2xl" style="position: absolute; inset: 0 auto auto 0; transform: translate(120px, -27px);">
              <div class="dropdown-content w-64 bottom-start">
                <div class="font-bold p-4 uppercase text-gray-700 text-sm leading-5">Apps</div>
                <div class="flex flex-wrap">
                  &lt;!&ndash;ICON HOME&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-gray-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span class="text-xs">Home</span>
                  </div>
                  &lt;!&ndash;ICON ACCOUNT&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-blue-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>

                    <span class="text-xs">Account</span>
                  </div>
                  &lt;!&ndash;ICON COMMENTS&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-orange-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    <span class="text-xs">Comments</span>
                  </div>
                  &lt;!&ndash;ICON SETTINGS&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-green-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                    <span class="text-xs">Settings</span>
                  </div>
                  &lt;!&ndash;ICON MAPS&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-red-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <span class="text-xs">Maps</span>
                  </div>
                  &lt;!&ndash;ICON TWITTER&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-blue-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    <span class="text-xs">Twitter</span>
                  </div>
                  &lt;!&ndash;ICON FACEBOOK&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-blue-800" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    <span class="text-xs">Facebook</span>
                  </div>
                  &lt;!&ndash;ICON INSTAGRAM&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-pink-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    <span class="text-xs">Instagram</span>
                  </div>
                  &lt;!&ndash;ICON LINKEDIN&ndash;&gt;
                  <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-blue-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    <span class="text-xs">Linkedin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>-->
  </div>
</template>

<script>
export default {
  name: "Dropdowns",
  data() {
    return {
      dropLeft: false,
      dropRight: false,

      dropEnd: false,
      dropStart: false,

      dropEndLeft: false,
      dropStartRight: false,
    }
  },
  methods: {
    dropLeftAc() {
      this.dropLeft = !this.dropLeft
      this.dropRight = false
      this.dropEnd = false
      this.dropStart = false
      this.dropEndLeft = false
      this.dropStartRight = false
    },
    dropRightAc() {
      this.dropRight = !this.dropRight
      this.dropLeft = false
      this.dropEnd = false
      this.dropStart = false
      this.dropEndLeft = false
      this.dropStartRight = false
    },
    /*dropEndAc() {
      this.dropRight = false
      this.dropLeft = false
      this.dropEnd = !this.dropEnd
      this.dropStart = false
      this.dropEndLeft = false
      this.dropStartRight = false
    },
    dropStartAc() {
      this.dropRight = false
      this.dropLeft = false
      this.dropEnd = false
      this.dropStart = !this.dropStart
      this.dropEndLeft = false
      this.dropStartRight = false
    },
    dropEndLeftAc() {
      this.dropRight = false
      this.dropLeft = false
      this.dropEnd = false
      this.dropStart = false
      this.dropEndLeft =  !this.dropEndLeft
      this.dropStartRight = false
    },
    dropEndStartAc() {
      this.dropRight = false
      this.dropLeft = false
      this.dropEnd = false
      this.dropStart = false
      this.dropEndLeft = false
      this.dropStartRight = !this.dropStartRight
    }*/
  }
}

</script>

<style scoped>

</style>
