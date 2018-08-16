<template>
  <v-container fluid grid-list-sm px-0>
    <v-layout row wrap>

      <v-flex d-flex xs12>
        <v-container fluid grid-list-xs class="px-0">
          <v-layout row wrap>

            <v-flex v-for="item in items" :key="item.index" xs4>
              <v-card>
                <v-container pa-1>
                  <v-layout row wrap>
                    <v-flex d-flex xs4 text-xs-center align-center pa-0>
                      <v-icon :class="[item.iconClass]" large>{{ item.icon }}</v-icon>
                    </v-flex>
                    <v-flex d-flex xs8 py-0 pr-1 pl-0>
                      <v-layout row>
                        <v-flex xs12 text-xs-right>
                          <div :class="[item.iconClass]">{{ item.title }}</div>
                          <div>{{ item.subtitle }}</div>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                  <v-divider />
                  <v-layout row wrap>
                    <v-flex d-flex xs12 pa-0>
                      <v-btn :class="[item.iconClass]" flat>
                        View
                        <v-icon right>keyboard_arrow_right</v-icon>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>

          </v-layout>
        </v-container>
      </v-flex>
      
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        icon: "assignment_ind",
        iconClass: "blue--text",
        title: "cool",
        subtitle: "STUFF"
      },
      {
        icon: "brightness_low",
        iconClass: "amber--text",
        title: "amazing",
        subtitle: "THINGS"
      },
      {
        icon: "pets",
        iconClass: "green--text",
        title: "nice",
        subtitle: "sweet"
      }
    ]
  })
};
</script>
<style scoped>
.grad {
  background-image: linear-gradient(45deg, #3c8ce7 50%, #00eaff 90%);
}
</style>
