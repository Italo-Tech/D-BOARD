<template>
  <!--CONTENT-->
  <div class="min-h-screen w-full p-4">
        <div >
          <!--DASHBOARD/BUTTON-->
          <div class="flex flex-row items-center justify-between mb-4">
            <div class="flex flex-col">
              <div class="text-xs uppercase font-light text-gray-500">Overview</div>
              <div class="text-xl font-bold">Dashboard</div>
            </div>
            <div class="flex-shrink-0 space-x-2">
              <button class="btn btn-default rounded-lg btn-icon bg-blue-500 hover:bg-blue-600 text-white space-x-1">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-white" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                <span>Add Widget</span>
              </button>
            </div>
          </div>

          <!--CONTENT-->
          <div class="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
            <!--USERS-->
            <div class="w-full lg:w-1/4">
              <div class="widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                <div class="flex flex-row items-center justify-between">
                  <div class="flex flex-col">
                    <div class="text-xs uppercase font-light text-gray-500">Users</div>
                    <div class="text-xl font-bold">588</div>
                  </div>
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-gray-500" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
              </div>
            </div>
            <!--SESSIONS-->
            <div class="w-full lg:w-1/4">
              <div class="widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                <div class="flex flex-row items-center justify-between">
                  <div class="flex flex-col">
                    <div class="text-xs uppercase font-light text-gray-500">Sessions</div>
                    <div class="text-xl font-bold">455</div>
                  </div>
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-gray-500" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                </div>
              </div>
            </div>
            <!--BOUNCE RATE-->
            <div class="w-full lg:w-1/4">
              <div class="widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                <div class="flex flex-row items-center justify-between">
                  <div class="flex flex-col">
                    <div class="text-xs uppercase font-light text-gray-500">Bounce Rate</div>
                    <div class="text-xl font-bold">40.5%</div>
                  </div>
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-gray-500" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </div>
              </div>
            </div>
            <!--SESSOION DURATION-->
            <div class="w-full lg:w-1/4">
              <div class="widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                <div class="flex flex-row items-center justify-between">
                  <div class="flex flex-col">
                    <div class="text-xs uppercase font-light text-gray-500">Sessions Duration</div>
                    <div class="text-xl font-bold">1m 24s</div>
                  </div>
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-gray-500" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
              </div>
            </div>
          </div>

          <!--GRAPHICS-->
          <div class="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
            <!--BarChart-->
            <div class="w-full lg:w-2/3 p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
              <div class="w-full">
                <!--header ghrapics-->
                <div class="flex flex-row items-center justify-between mb-6">
                  <!--Conversions title-->
                  <div class="flex flex-col">
                    <div class="text-sm font-light text-gray-500">Conversions</div>
                    <div class="text-sm font-bold">
                      <span>This year</span>
                    </div>
                  </div>
                  <!--icon ellipsis-->
                  <div class="relative">
                    <button @click.prevent="isConversions = !isConversions" class="bg-gray-200 pl-1.5 btn-default btn-circle btn-icon hover:scale-100 hover:scale-100 hover:bg-gray-300 relative focus:outline-none">
                      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current stroke-1" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                    </button>
                    <div v-show="isConversions" class="dropdown absolute top-0 right-0 mt-8 transition">
                      <div class="dropdown-content w-48 bottom-start">
                        <div class="flex flex-col w-full">
                          <ul class="list-none">
                            <li>
                              <a class="flex flex-row items-center justify-start h-10 w-full px-2 bg-white hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800" href="/">Today</a>
                            </li>
                            <li>
                              <a class="flex flex-row items-center justify-start h-10 w-full px-2 bg-white hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800" href="/">This week</a>
                            </li>
                            <li>
                              <a class="flex flex-row items-center justify-start h-10 w-full px-2 bg-white hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800" href="/">This month</a>
                            </li>
                            <li>
                              <a class="flex flex-row items-center justify-start h-10 w-full px-2 bg-white hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800" href="/">This year</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--Graphic Bar-->
              <BarChart />
            </div>
            <!--RadarChart-->
            <div class="w-full lg:w-1/3">
              <div class="w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                <div class="flex flex-row items-center justify-between mb-6">
                  <!--Sessions title-->
                  <div class="flex flex-col">
                    <div class="text-gray-500 text-sm font-light">Sessions</div>
                    <div class="text-sm font-bold">
                      <span>By device</span>
                    </div>
                  </div>
                  <!--icon ellipsis-->
                  <div class="relative">
                    <button @click.prevent="isConversions2 = !isConversions2" class="bg-gray-200 pl-1.5 btn-default btn-circle btn-icon hover:scale-100 hover:scale-100 hover:bg-gray-300 relative focus:outline-none">
                      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current stroke-1" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                    </button>
                    <div v-show="isConversions2" class="dropdown absolute top-0 right-0 mt-8 transition">
                      <div class="dropdown-content w-48 bottom-start">
                        <div class="flex flex-col w-full">
                          <ul class="list-none">
                            <li>
                              <a class="flex flex-row items-center justify-start h-10 w-full px-2 bg-white hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800" href="/">Today</a>
                            </li>
                            <li>
                              <a class="flex flex-row items-center justify-start h-10 w-full px-2 bg-white hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800" href="/">This week</a>
                            </li>
                            <li>
                              <a class="flex flex-row items-center justify-start h-10 w-full px-2 bg-white hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800" href="/">This month</a>
                            </li>
                            <li>
                              <a class="flex flex-row items-center justify-start h-10 w-full px-2 bg-white hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800" href="/">This year</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-row w-full">
                  <!--Radar-->
                  <RadarChart />
                </div>

              </div>
            </div>
          </div>

          <!--USERS-->
          <div class="w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
            <div class="w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">

              <!--Header Users-->
              <div class="flex flex-row items-center justify-between mb-6">
                <div class="flex flex-col">
                  <div class="font-light text-sm text-gray-500">Users</div>
                  <div class="font-bold text-sm">
                    <span>Most Important markets</span>
                  </div>
                </div>
              </div>
              <!--LIST USERS-->
              <div class="flex flex-col w-full">
                <div class="overflow-x-scroll lg:overflow-hidden">

                  <!--TABLE-->
                  <table role="table" class="table w-full">
                    <thead class="border-b w-full">
                      <tr role="row">
                      <!--checkbox-->
                      <th class="py-2 px-4" colspan="1" role="columnheader">
                        <div class="flex flex-row items-center justify-start whitespace-nowrap">
                      <span>
                        <input class="cursor-pointer form-checkbox h-4 w-4" type="checkbox" title="Toggle All Row Selected">
                        <span class="ml-auto"></span>
                      </span>
                        </div>
                      </th>
                      <!--country-->
                      <th class="cursor-pointer text-gray-500" colspan="1" role="columnheader" title="Toggle SortBy">
                        <div class="flex flex-row items-center justify-start whitespace-nowrap">
                          <span>Country</span>
                        </div>
                      </th>
                      <!--Active users-->
                      <th class="cursor-pointer text-gray-500" colspan="1" role="columnheader" title="Toggle SortBy">
                        <div class="flex flex-row items-center justify-start whitespace-nowrap">
                          <span>Active Users</span>
                        </div>
                      </th>
                      <!--team members-->
                      <th class="cursor-pointer text-gray-500" colspan="1" role="columnheader" title="Toggle SortBy">
                        <div class="flex flex-row items-center justify-start whitespace-nowrap">
                          <span>Team Members</span>
                        </div>
                      </th>
                      <!--progress-->
                      <th class="cursor-pointer text-gray-500" colspan="1" role="columnheader" title="Toggle SortBy">
                        <div class="flex flex-row items-center justify-start whitespace-nowrap">
                          <span>Progress</span>
                        </div>
                      </th>
                    </tr>
                    </thead>
                    <tbody class="w-full" role="rowgroup">
                      <tr v-for="item in 2" :key="item" role="row" class="border-b items-center">
                        <!--checkbox-->
                        <td role="cell" class="px-4 py-6 items-center flex">
                          <input class="cursor-pointer form-checkbox h-4 w-4" type="checkbox" title="Toggle All Row Selected">
                        </td>
                        <!--nation-->
                        <td role="cell" class="">
                          <span class="text-sm flag-icon flag-icon-cn"></span>
                          <span class="ml-2">China</span>
                        </td>
                        <!--number users-->
                        <td role="cell">
                          <span>1,377,422,166</span>
                        </td>
                        <!--team members-->
                        <td role="cell">
                          <div class="flex flex-row items-center justify-start">
                            <img src="https://media.istockphoto.com/photos/closeup-portrait-of-young-smiling-man-in-denim-shirt-isolated-on-gray-picture-id1171169125?b=1&k=6&m=1171169125&s=170667a&w=0&h=4SOSCh5T_4BEDeqS1e0OvKyPQvlSgx4mWNRp5rFdj2o=" alt="media" class="h-8 w-8 ring rounded-full -ml-3">
                            <img src="https://cdn.pixabay.com/photo/2017/06/15/11/40/beautiful-2405131__340.jpg" alt="media" class="h-8 w-8 ring rounded-full -ml-3">
                            <img src="https://media.istockphoto.com/photos/portrait-of-smiling-male-employee-posing-in-office-picture-id1192579030?b=1&k=6&m=1192579030&s=170667a&w=0&h=LiXaAAWgR2bORhhnqzEy5l3hqx-ZazFoytujtmaD5-g=" alt="media" class="h-8 w-8 ring rounded-full -ml-3">
                            <img src="https://media.istockphoto.com/photos/pleasure-fashion-idyllic-perfection-hydration-wellness-wellbeing-picture-id992913432?b=1&k=6&m=992913432&s=170667a&w=0&h=-WiY57m_1VdNTndRYuLb9QyWqZIw_3gYo_YqWDJONWs=" alt="media" class="h-8 w-8 ring rounded-full -ml-3">
                          </div>
                        </td>
                        <!--progress-->
                        <td role="cell">
                          <div class="flex flex-col w-full">
                            <div class="flex flex-row items-center justify-around">
                              <div class="relative flex flex-row w-full text-center text-xs items-center h-1">
                                <div class="top-0 left-0 h-1 w-full bg-indigo-500" style="width: 83%"></div>
                              </div>
                              <span class="ml-1 text-gray-500">83%</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr v-for="item in 3" :key="item" role="row" class="border-b items-center">
                        <!--checkbox-->
                        <td role="cell" class="px-4 py-6 items-center flex">
                          <input class="cursor-pointer form-checkbox h-4 w-4" type="checkbox" title="Toggle All Row Selected">
                        </td>
                        <!--nation-->
                        <td role="cell" class="">
                          <span class="text-sm flag-icon flag-icon-br"></span>
                          <span class="ml-2">Brasil</span>
                        </td>
                        <!--number users-->
                        <td role="cell">
                          <span>1,295,210,000</span>
                        </td>
                        <!--team members-->
                        <td role="cell">
                          <div class="flex flex-row items-center justify-start">
                            <img src="https://cdn.pixabay.com/photo/2017/06/09/17/11/model-2387582__340.jpg" alt="media" class="h-8 w-8 ring rounded-full -ml-3">
                            <img src="https://cdn.pixabay.com/photo/2017/05/24/15/42/eye-2340806__340.jpg" alt="media" class="h-8 w-8 ring rounded-full -ml-3">
                            <img src="https://cdn.pixabay.com/photo/2016/03/27/21/52/cold-1284411__340.jpg" alt="media" class="h-8 w-8 ring rounded-full -ml-3">
                            <img src="https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457__340.jpg" alt="media" class="h-8 w-8 ring rounded-full -ml-3">
                          </div>
                        </td>
                        <!--progress-->
                        <td role="cell">
                          <div class="flex flex-col w-full">
                            <div class="flex flex-row items-center justify-around">
                              <div class="relative flex flex-row w-full text-center text-xs items-center h-1">
                                <div class="top-0 left-0 h-1 w-full bg-green-500" style="width: 71%"></div>
                              </div>
                              <span class="ml-1 text-gray-500">71%</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr v-for="item in 3" :key="item" role="row" class="border-b items-center">
                        <!--checkbox-->
                        <td role="cell" class="px-4 py-6 items-center flex">
                          <input class="cursor-pointer form-checkbox h-4 w-4" type="checkbox" title="Toggle All Row Selected">
                        </td>
                        <!--nation-->
                        <td role="cell" class="">
                          <span class="text-sm flag-icon flag-icon-br"></span>
                          <span class="ml-2">Itália</span>
                        </td>
                        <!--number users-->
                        <td role="cell">
                          <span>146,599,183</span>
                        </td>
                        <!--team members-->
                        <td role="cell">
                          <div class="flex flex-row items-center justify-start">
                            <img src="https://cdn.pixabay.com/photo/2015/08/05/04/02/people-875597__340.jpg" alt="media" class="h-8 w-8 ring rounded-full -ml-3">
                            <img src="https://cdn.pixabay.com/photo/2014/08/28/08/31/model-429733__340.jpg" alt="media" class="h-8 w-8 ring rounded-full -ml-3">
                            <img src="https://cdn.pixabay.com/photo/2015/07/20/13/01/fred-852770__340.jpg" alt="media" class="h-8 w-8 ring rounded-full -ml-3">
                          </div>
                        </td>
                        <!--progress-->
                        <td role="cell">
                          <div class="flex flex-col w-full">
                            <div class="flex flex-row items-center justify-around">
                              <div class="relative flex flex-row w-full text-center text-xs items-center h-1">
                                <div class="top-0 left-0 h-1 w-full bg-green-700" style="width: 82%"></div>
                              </div>
                              <span class="ml-1 text-gray-500">82%</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr v-for="item in 3" :key="item" role="row" class="border-b items-center">
                        <!--checkbox-->
                        <td role="cell" class="px-4 py-6 items-center flex">
                          <input class="cursor-pointer form-checkbox h-4 w-4" type="checkbox" title="Toggle All Row Selected">
                        </td>
                        <!--nation-->
                        <td role="cell" class="">
                          <span class="text-sm flag-icon flag-icon-br"></span>
                          <span class="ml-2">França</span>
                        </td>
                        <!--number users-->
                        <td role="cell">
                          <span>126,960,000</span>
                        </td>
                        <!--team members-->
                        <td role="cell">
                          <div class="flex flex-row items-center justify-start">
                            <img src="https://cdn.pixabay.com/photo/2015/03/08/17/25/musician-664432__340.jpg" alt="media" class="h-8 w-8 ring rounded-full -ml-3">
                            <img src="https://cdn.pixabay.com/photo/2018/01/04/08/04/people-3060107__340.jpg" alt="media" class="h-8 w-8 ring rounded-full -ml-3">
                          </div>
                        </td>
                        <!--progress-->
                        <td role="cell">
                          <div class="flex flex-col w-full">
                            <div class="flex flex-row items-center justify-around">
                              <div class="relative flex flex-row w-full text-center text-xs items-center h-1">
                                <div class="top-0 left-0 h-1 w-full bg-red-500" style="width: 47%"></div>
                              </div>
                              <span class="ml-1 text-gray-500">47%</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!--TABLE FOOTER-->
                  <div class="flex flex-row w-full items-center justify-around lg:justify-between my-4">
                    <!--Next/Last-->
                    <div class="flex flex-wrap items-center justify-start space-x-2 pagination">
                      <button class="btn btn-default bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">Next</button>
                      <button class="btn btn-default bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">Last</button>
                    </div>
                    <!--Page-->
                    <span class="hidden lg:block">
                  Page
                  <b>1 of 11</b>
                </span>
                    <!--Show Items-->
                    <select class="p-3 cursor-pointer hidden lg:block border rounded text-sm bg-white hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-800 outline-none shadow-none focus:shadow-none">
                      <option class="font-light block whitespace-nowrap" value="10">Show 10</option>
                      <option class="font-light block whitespace-nowrap" value="25">Show 25</option>
                      <option class="font-light block whitespace-nowrap" value="50">Show 50</option>
                      <option class="font-light block whitespace-nowrap" value="100">Show 100</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Last PAGE-->
          <div class="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
            <!--Project status-->
            <div class="w-full lg:w-1/2">
              <div class="w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                <!--Title-->
                <div class="flex flex-row items-center justify-between mb-6">
                  <div class="flex flex-col">
                    <div class="text-sm font-light text-gray-500">Project status</div>
                    <div class="text-sm font-bold"><span>This week</span></div>
                  </div>
                </div>
                <!--Items Week-->
                <div class="flex flex-row w-full" v-for="week in 4" :key="week">
                  <div class="flex flex-col w-full">
                    <div class="flex relative justify-start items-start">

                      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div class="h-full w-1 bg-gray-200 dark:bg-gray-800 pointer-events-none"></div>
                      </div>
                      <div class="flex-shrink-0 w-6 h-6 rounded-full inline-flex items-center justify-center bg-blue-500 text-white relative z-10 font-medium text-sm">1</div>
                      <div class="flex-grow flex items-start flex-col pb-4">
                        <div class="flex items-start justify-start px-4">
                          <div class="flex flex-col w-full">
                            <div class="text-sm font-bold">Perferendis dignissimos provident saepe in.</div>
                            <div class="text-sm">Corporis in est quae exercitationem.</div>
                            <div class="text-sm">a few seconds ago</div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--Sales Graphic-->
            <div class="w-full lg:w-1/2">
              <div class="w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                <!--Title-->
                <div class="flex flex-row items-center justify-between mb-6">
                  <div class="flex flex-col">
                    <div class="text-sm font-light text-gray-500">Sales</div>
                    <div class="text-sm font-bold"><span>This year</span></div>
                  </div>
                </div>
                <!--LineChart-->
                <div class="w-full">
                  <LineChart />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>

import LineChart from "@/components/graphics/LineChart";
import RadarChart from "@/components/graphics/RadarChart";
import BarChart from "@/components/graphics/BarChart";


export default {
  name: 'Home',
  components: {BarChart, RadarChart, LineChart},
  data() {
    return {
      state: {
        chartData: {},
        chartOptions: {
          responsive: true
        }
      },
      isConversions: false,
      isConversions2: false,
    }
  },

  beforeMount () {
    // this.fillData()
  },

  methods: {
    /*fillData () {
      this.state.chartData = {
        labels: ['label 1', 'Label 2'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (10 - 5 + 1)) + 10
    },*/
  }
}
</script>

<style>

/*WRAPPER*/
@media (min-width: 768px) {
 .wrapper {
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }
}

/*HIDDEN SIBLING*/
@media (min-width: 768px) {
  [data-collapsed=false] .hidden-sibling.left-sidebar-item .arrow {
    transform: rotate(
        -90deg
    )!important;
  }
}
@media (min-width: 768px) {
  .arrow {
    transform: rotate(
        90deg
    );
    transition: transform .15s ease-in-out;
  }
}
@media (min-width: 768px) {
  [data-collapsed=false] .hidden-sibling+ul, [data-collapsed=true] .arrow {
    display: none;
  }
}

/*MAIN*/
@media (min-width: 768px) {
  [data-layout=layout-1] .wrapper .main {
    min-width: calc(100% - (.25rem * 64));
    display: flex;
    flex-direction: column;
  }
}

.btn.btn-default {
  padding: .5rem 1rem;
}
.btn.btn-default, .btn.btn-sm {
  font-size: .75rem;
  line-height: 1rem;
}

.dropdown .dropdown-content {
  border-radius: .375rem;
  --tw-shadow: 0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);
  box-shadow: var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);
}
.flag-icon::before {
  content: '\00a0';
}

.table thead tr th {
  font-weight: 300;
  font-size: .80rem;
  line-height: 1rem;
  text-transform: uppercase;
  letter-spacing: .05em;
}
</style>
