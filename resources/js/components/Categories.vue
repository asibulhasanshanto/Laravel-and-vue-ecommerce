<template>
    <!-- all category -->
    <div
        class="px-8 py-4 bg-primary flex items-center cursor-pointer group relative"
    >
        <span class="text-white">
            <i class="fas fa-bars"></i>
        </span>
        <span class="capitalize ml-2 text-white">All categories</span>

        <div
            class="absolute left-0 top-full w-full bg-white shadow-md py-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50 divide-y divide-gray-300 divide-dashed"
        >
            <!-- single category -->
            <a
                href="#"
                class="px-6 py-3 flex items-center hover:bg-gray-100 transition"
            >
                <img
                    src="images/icons/bed.svg"
                    class="w-5 h-5 object-contain"
                />
                <span class="ml-6 text-gray-600 text-sm">Bedroom</span>
            </a>
            <!-- single category end -->
            <!-- single category -->
            <a
                href="#"
                class="px-6 py-3 flex items-center hover:bg-gray-100 transition"
            >
                <img
                    src="images/icons/sofa.svg"
                    class="w-5 h-5 object-contain"
                />
                <span class="ml-6 text-gray-600 text-sm">Sofa</span>
            </a>
            <!-- single category end -->
            <!-- single category -->
            <a
                href="#"
                class="px-6 py-3 flex items-center hover:bg-gray-100 transition"
            >
                <img
                    src="images/icons/office.svg"
                    class="w-5 h-5 object-contain"
                />
                <span class="ml-6 text-gray-600 text-sm">Office</span>
            </a>
            <!-- single category end -->
            <!-- single category -->
            <a
                href="#"
                class="px-6 py-3 flex items-center hover:bg-gray-100 transition"
            >
                <img
                    src="images/icons/terrace.svg"
                    class="w-5 h-5 object-contain"
                />
                <span class="ml-6 text-gray-600 text-sm">Outdoor</span>
            </a>
            <!-- single category end -->
            <!-- single category -->
            <a
                href="#"
                class="px-6 py-3 flex items-center hover:bg-gray-100 transition"
            >
                <img
                    src="images/icons/bed-2.svg"
                    class="w-5 h-5 object-contain"
                />
                <span class="ml-6 text-gray-600 text-sm">Mattress</span>
            </a>
            <!-- single category end -->
            <!-- single category -->
            <a
                href="#"
                class="px-6 py-3 flex items-center hover:bg-gray-100 transition"
            >
                <img
                    src="images/icons/restaurant.svg"
                    class="w-5 h-5 object-contain"
                />
                <span class="ml-6 text-gray-600 text-sm">Sofa</span>
            </a>
            <!-- single category end -->
        </div>
    </div>
    <!-- all category end -->
</template>
