<template>
  <div class="repositories">
    <div class="back">
      <router-link to="/">Back</router-link>
    </div>
    <div v-for="(repositorie, index) in repositories" :key="index" class="repositorie">
      <h3 v-text="repositorie.name"></h3>
      <p v-text="repositorie.description"></p>
      <div class="info">
        <span class="info-single info-stars">
          {{ repositorie.stargazers_count }} stars
        </span>
        <span class="info-single info-issues">
          {{ repositorie.open_issues }} issues
        </span>
        <span class="info-single info-forks">
          {{ repositorie.forks }} forks
        </span>
        <span v-if="repositorie.language" class="info-single info-lang">
          Language: {{ repositorie.language }}
        </span>
      </div>
      <a :href="repositorie.svn_url" target="_blank">
        <Btn>View Repo</Btn>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Btn from '@/components/Btn/Btn';

export default {
  components: {
    Btn,
  },
  computed: {
    ...mapGetters({
      repositories: 'getRepositories',
    }),
  },
};
</script>

<style lang="scss" scoped>
  .repositories {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .repositorie {
      width: 100%;
      max-width: 300px;
      background-color: #fff;
      box-sizing: border-box;
      padding: 1em;
      margin: .5em;
      border-radius: 10px;

      .info {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        box-sizing: border-box;
        padding: 1em;

        .info-single {
          position: relative;
          min-width: 30%;
          padding: .4em;
          margin: .3em 0;

          &:after {
            content: '';
            position: absolute;
            top: 5px;
            left: -20px;
            width: 20px;
            height: 20px;
            background-size: 20px;
            background-position: 95% 50%;
            background-repeat: no-repeat;
          }
        }
        .info-stars:after {
          background-image: url('../../assets/images/star.svg');
        }

        .info-issues:after {
          background-image: url('../../assets/images/comments.svg');
        }

        .info-forks:after {
          background-image: url('../../assets/images/fork.svg');
        }

        .info-lang:after {
          background-image: url('../../assets/images/code.svg');
        }
      }
    }

    .back {
      position: absolute;
      top: 20px;
      left: 20px;

      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
</style>
