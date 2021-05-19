<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <a class="navbar-brand" >
                Exam Test
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav ml-auto">

                    <li><router-link  class="nav-link " :to="{name:'dashboard'}">Dashboard</router-link></li>
                    <li><router-link  class="nav-link " :to="{name:'assignment'}">Assignment</router-link></li>
                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto">
                    <!-- Authentication Links -->
<!--                    @guest-->
<!--                    @if (Route::has('login'))-->
<!--                    <li class="nav-item">-->
<!--                        <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>-->
<!--                    </li>-->
<!--                    @endif-->

<!--                    @if (Route::has('register'))-->
<!--                    <li class="nav-item">-->
<!--                        <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>-->
<!--                    </li>-->
<!--                    @endif-->
<!--                    @else-->
                    <li class="nav-item dropdown">
                        <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                            Imtiaz
                        </a>

                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item">
                                Logout
                            </a>
                        </div>
                    </li>
<!--                    @endguest-->
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Header.vue"
    }
</script>

<style scoped>

</style>
