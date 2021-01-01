class TripInfoObject {
  constructor () {
   this.TripInfo = {
     id: null,
     location: {
      city: undefined,
      state: undefined,
      adress: undefined,
      zip: undefined
    },
      startDate: {
        day: undefined,
        month: undefined,
        year: undefined
      },
      endDate: {
        day: undefined,
        month: undefined,
        year: undefined
      },
      type: undefined
    }
  }
};

export default TripInfoObject;