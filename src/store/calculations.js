import { defineStore } from "pinia";

export const useCalculationsStore = defineStore({
  id: "calculations",
  state: () => ({
    calculations: 0,
    fianceProperty: {
      homeValue: 10000,
      downPayment: "",
      loanLength: "",
      interestRate: "",
      oneTimeExpenses: "",
      startDate: "",
      paymentFrequency: "",
    },
    downValue: false,
    disableDownPercent: false,
    loanLengthValue: false,
    oneTimeExpensesValue: false,
    paymentFrequencyValue: false,
  }),
  getters: {
    getCalculations: (state) => state.calculations,
  },
  actions: {
    mortgageCalculation() {
      if (this.paymentFrequencyValue) {
        this.fianceProperty.paymentFrequency = "bi-weekly";
      } else {
        this.fianceProperty.paymentFrequency = "monthly";
      }

      const weeksInMonth = 4.08;
      const monthsInYear = weeksInMonth * 12;

      let principal;
      let numberOfPayments;
      if (this.downValue) {
        if (this.oneTimeExpensesValue) {
          principal =
            this.fianceProperty.homeValue -
            this.fianceProperty.downPayment +
            this.fianceProperty.oneTimeExpenses;
        } else {
          principal =
            this.fianceProperty.homeValue -
            this.fianceProperty.downPayment +
            (this.fianceProperty.oneTimeExpenses / 100) *
              this.fianceProperty.homeValue;
        }
      } else {
        if (this.oneTimeExpensesValue) {
          principal =
            this.fianceProperty.homeValue -
            (this.fianceProperty.downPayment / 100) *
              this.fianceProperty.homeValue +
            this.fianceProperty.oneTimeExpenses;
        } else {
          principal =
            this.fianceProperty.homeValue -
            (this.fianceProperty.downPayment / 100) *
              this.fianceProperty.homeValue +
            (this.fianceProperty.oneTimeExpenses / 100) *
              this.fianceProperty.homeValue;
        }
      }

      const monthlyRate = this.fianceProperty.interestRate / 100 / monthsInYear;

      if (this.loanLengthValue) {
        numberOfPayments = this.fianceProperty.loanLength * 12;
      } else {
        numberOfPayments = this.fianceProperty.loanLength * monthsInYear;
      }

      const monthlyPayment =
        (principal * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

      if (this.fianceProperty.paymentFrequency === "bi-weekly") {
        this.calculations = (monthlyPayment * (1 / 2)).toFixed(2);
      } else {
        this.calculations = monthlyPayment.toFixed(2);
      }

      return this.calculations
    },

    calculateDownPercentage() {
      this.downValue = false;
      if (!this.downValue) {
        this.fianceProperty.downPayment =
          (this.fianceProperty.homeValue / this.fianceProperty.downPayment).toFixed(2);
      }
    },
    calculateDownRaqam() {
      this.downValue = true;
      if (this.downValue) {
        this.fianceProperty.downPayment =
          ((this.fianceProperty.downPayment / 1000) *
          this.fianceProperty.homeValue).toPrecision(4);
      }
    },
  },
});
