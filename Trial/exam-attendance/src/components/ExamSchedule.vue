<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <v-container fluid grid-list-md>
            <v-data-iterator
                    :items="items"
                    :rows-per-page-items="rowsPerPageItems"
                    :pagination.sync="pagination"
                    content-tag="v-layout"
                    row
                    wrap
            >
                <template v-slot:item="props">
                    <v-flex
                            xs12
                            sm6
                            md4
                            lg3
                    >
                        <v-card>
                            <v-card-title><h4>{{ props.item.name }}</h4></v-card-title>
                            <v-divider></v-divider>
                            <v-list dense>
                                <v-list-tile v-for="(row, index) in props.item.list" >
                                    <v-list-tile-content>{{ row }}</v-list-tile-content>
                                </v-list-tile>
                            </v-list>
                        </v-card>
                    </v-flex>
                </template>
            </v-data-iterator>
        </v-container>
        <div>

        </div>
    </div>

</template>

<script>

    export default {
        name: "ExamSchedule",
        data(){
            return {
                items: [
                    {
                        name: ' Week1',
                        list:[
                            '17 June 2019',
                            '18 June 2019',
                            '19 June 2019',
                            '20 June 2019 ',
                            '21 June 2019'
                        ]
                    },
                    {
                        name:'Practical',
                        list:['1 July 2019',
                        '2 July 2019',
                        '3 July 2019',
                        '4 July 2019',
                        '5 July 2019'
                        ]
                    },
                    {
                        name:'   Week2  ',
                        list:['   24 June 2019',
                        '   25 June 2019',
                        '   26 June 2019',
                        '   27 June 2019',
                        '   28 June 2019']
                    }
                ]
            }
        }

    }
</script>

<style scoped>

</style>