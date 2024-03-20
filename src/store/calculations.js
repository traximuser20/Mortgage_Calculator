import { defineStore } from "pinia";
import moment from "moment";
export const useCalculationsStore = defineStore({
  id: "calculations",
  state: () => ({
    calculations: 0,
    fianceProperty: {
      homeValue: 350000,
      downPayment: 12,
      loanLength: 30,
      interestRate: 5,
      oneTimeExpenses: 3,
      startDate: moment().locale("en").format("YYYY-MM-DD"),
      paymentFrequency: "",
      homeInsurance: 0.35,
      propertyTax: 1.25,
      hoaFees: 0,
      pmi: 0.625,
      pmiMonthly: 0,
      extraPayments: 0,
      propertyTaxMonthly: 0,
      homeInsuranceMonthly: 0,
      monthlyInterestRate: 0,
    },
    valuesArray: [],
    downValue: false,
    disableDownPercent: false,
    loanLengthValue: false,
    oneTimeExpensesValue: false,
    paymentFrequencyValue: false,
    homeInsuranceValue: false,
    propertyTaxValue: false,
    pmiValue: false,
  }),
  getters: {
    getCalculations: (state) => state.calculations,
  },
  actions: {
    calculateDownPercentage() {
      if (!this.downValue) {
        this.fianceProperty.downPayment =
          this.fianceProperty.homeValue / this.fianceProperty.downPayment;
      } else {
        this.fianceProperty.downPayment =
          (this.fianceProperty.downPayment / 1000) *
          this.fianceProperty.homeValue;
      }
      return this.fianceProperty.downPayment;
    },

    loanLengthYear() {
      if (!this.loanLengthValue) {
        this.fianceProperty.loanLength = this.fianceProperty.loanLength / 12;
      } else {
        this.fianceProperty.loanLength = this.fianceProperty.loanLength * 12;
      }
    },
    loanLengthMonth() {
      this.loanLengthValue = true;
    },

    oneTimePercentage() {
      if (!this.oneTimeExpensesValue) {
        this.fianceProperty.oneTimeExpenses =
          (this.fianceProperty.oneTimeExpenses / 100) *
          this.fianceProperty.homeValue;
      } else {
        this.fianceProperty.oneTimeExpenses =
          (this.fianceProperty.oneTimeExpenses / 1000) *
          this.fianceProperty.homeValue;
      }
    },

    paymentFrequencyType() {
      if (!this.paymentFrequencyValue) {
        this.fianceProperty.paymentFrequency = "Monthly";
      } else {
        this.fianceProperty.paymentFrequency = "Bi-weekly";
      }
      return this.fianceProperty.paymentFrequency;
    },

    homeInsurancePercentage() {
      if (!this.homeInsuranceValue) {
        this.fianceProperty.homeInsurance =
          (this.fianceProperty.homeInsurance / 100) *
          this.fianceProperty.homeValue;
      } else {
        this.fianceProperty.homeInsurance =
          (this.fianceProperty.homeInsurance / 1000) *
          this.fianceProperty.homeValue;
      }
    },

    propertyTaxPercentage() {
      if (!this.propertyTaxValue) {
        this.fianceProperty.propertyTax =
          (this.fianceProperty.propertyTax / 100) *
          this.fianceProperty.homeValue;
      } else {
        this.fianceProperty.propertyTax =
          (this.fianceProperty.propertyTax / 1000) *
          this.fianceProperty.homeValue;
      }
    },

    pmiPercentage() {
      if (!this.pmiValue) {
        this.fianceProperty.pmi =
          (this.fianceProperty.pmi / 100) * this.fianceProperty.homeValue;
      } else {
        this.fianceProperty.pmi =
          (this.fianceProperty.pmi / 1000) * this.fianceProperty.homeValue;
      }
    },

    mortgageCalculation() {
      let principal;
      principal =
        this.fianceProperty.homeValue *
        (1 - this.fianceProperty.downPayment / 100);

      // Add one-time expenses to the principal
      principal +=
        (this.fianceProperty.homeValue * this.fianceProperty.oneTimeExpenses) /
        100;

      // Convert annual interest rate to monthly and percentage to decimal
      let monthlyInterestRate = this.fianceProperty.interestRate / 100 / 12;

      this.fianceProperty.monthlyInterestRate = (principal / 10 / 12).toFixed(
        0
      );

      // Convert loan length from years to months
      let loanLengthMonths = this.fianceProperty.loanLength * 12;

      // Calculate monthly payment without including additional costs
      let monthlyPaymentWithoutAdditionalCosts =
        (principal *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, loanLengthMonths)) /
        (Math.pow(1 + monthlyInterestRate, loanLengthMonths) - 1);

      // Calculate additional costs per month
      let homeInsuranceMonthly =
        (this.fianceProperty.homeValue *
          (this.fianceProperty.homeInsurance / 100)) /
        12;

      this.fianceProperty.homeInsuranceMonthly = (
        (this.fianceProperty.homeValue *
          (this.fianceProperty.homeInsurance / 100)) /
        12
      ).toFixed(0);

      let propertyTaxMonthly =
        (this.fianceProperty.homeValue *
          (this.fianceProperty.propertyTax / 100)) /
        12;

      this.fianceProperty.propertyTaxMonthly = (
        (this.fianceProperty.homeValue *
          (this.fianceProperty.propertyTax / 100)) /
        12
      ).toFixed(0);

      let pmiMonthly = (principal * (this.fianceProperty.pmi / 100)) / 12;

      this.fianceProperty.pmiMonthly = (
        (principal * (this.fianceProperty.pmi / 100)) /
        12
      ).toFixed(0);

      // Calculate total monthly payment including additional costs
      let totalMonthlyPayment =
        monthlyPaymentWithoutAdditionalCosts +
        homeInsuranceMonthly +
        propertyTaxMonthly +
        pmiMonthly;

      this.calculations = totalMonthlyPayment.toFixed(2);
      // if (!this.downValue) {
      //   this.principal =
      //     this.fianceProperty.homeValue *
      //     (1 - this.fianceProperty.downPayment / 100);
      // } else {
      //   this.principal =
      //     this.fianceProperty.homeValue /
      //     (1 + this.fianceProperty.downPayment * 100);
      // }
      // if (!this.oneTimeExpensesValue) {
      //   this.principal +=
      //     this.fianceProperty.homeValue *
      //     (this.fianceProperty.oneTimeExpenses / 100);
      // } else {
      //   this.principal -=
      //     this.fianceProperty.homeValue /
      //     (this.fianceProperty.oneTimeExpenses * 100);
      // }
      // let monthlyInterestRate = this.fianceProperty.interestRate / 100 / 12;
      // let loanLengthMonths;
      // if (!this.loanLengthValue) {
      //   loanLengthMonths = this.fianceProperty.loanLength / 12;
      // } else {
      //   loanLengthMonths = this.fianceProperty.loanLength * 12;
      // }
      // let monthlyPayment =
      //   (this.principal *
      //     monthlyInterestRate *
      //     Math.pow(1 + monthlyInterestRate, loanLengthMonths)) /
      //   (Math.pow(1 + monthlyInterestRate, loanLengthMonths) - 1);
      // let homeInsuranceMonthly;
      // if(!this.homeInsuranceValue) {
      //   homeInsuranceMonthly = (this.fianceProperty.homeValue * (this.fianceProperty.homeInsurance / 100)) / 12;
      // }
      // else {
      //   homeInsuranceMonthly = (this.fianceProperty.homeValue * (this.fianceProperty.homeInsurance)) / 12;
      // }
      // let propertyTaxMonthly;
      // if(!this.propertyTaxValue) {
      //   propertyTaxMonthly = (this.fianceProperty.homeValue * (this.fianceProperty.propertyTax / 100)) / 12;
      // }
      // else {
      //   propertyTaxMonthly = (this.fianceProperty.homeValue * (this.fianceProperty.propertyTax)) / 12;
      // }
      // let pmiMonthly;
      // if(!this.pmiValue) {
      //   pmiMonthly = (this.fianceProperty.homeValue * (this.fianceProperty.pmi / 100)) / 12;
      // }
      // else {
      //   pmiMonthly = (this.fianceProperty.homeValue * (this.fianceProperty.pmi)) / 12;
      // }
      // this.calculations = (monthlyPayment+homeInsuranceMonthly+propertyTaxMonthly+pmiMonthly).toFixed(2);

      //   const calculateMonthlyPayment = () => {
      //     // Calculate the principal loan amount
      //     let principal = homeValue * (1 - downPaymentPercentage / 100);

      //     // Add one-time expenses to the principal
      //     principal += homeValue * oneTimeExpensesPercentage / 100;

      //     // Convert annual interest rate to monthly and percentage to decimal
      //     let monthlyInterestRate = (interestRate / 100) / 12;

      //     // Convert loan length from years to months
      //     let loanLengthMonths = loanLengthYears * 12;

      //     // Calculate monthly payment without including additional costs
      //     let monthlyPaymentWithoutAdditionalCosts = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanLengthMonths) /
      //         (Math.pow(1 + monthlyInterestRate, loanLengthMonths) - 1);

      //     // Calculate additional costs per month
      //     let homeInsuranceMonthly = homeValue * (homeInsuranceRate / 100) / 12;
      //     let propertyTaxMonthly = homeValue * (propertyTaxRate / 100) / 12;
      //     let pmiMonthly = (principal * (pmiRate / 100)) / 12;

      //     // Calculate total monthly payment including additional costs
      //     let totalMonthlyPayment = monthlyPaymentWithoutAdditionalCosts + homeInsuranceMonthly + propertyTaxMonthly + pmiMonthly;

      //     return totalMonthlyPayment.toFixed(2); // Return the result rounded to 2 decimal places
      // }

      // // Example usage
      // let homeValue = 350000;
      // let downPaymentPercentage = 12;
      // let loanLengthYears = 30;
      // let interestRate = 5;
      // let oneTimeExpensesPercentage = 3;
      // let homeInsuranceRate = 0.14;
      // let propertyTaxRate = 0.15;
      // let pmiRate = 0.73;

      // let monthlyPayment = calculateMonthlyPayment(homeValue, downPaymentPercentage, loanLengthYears, interestRate, oneTimeExpensesPercentage, homeInsuranceRate, propertyTaxRate, pmiRate);
      // console.log("Monthly Mortgage Payment (including additional costs): $" + monthlyPayment);

      //   return this.calculations;
    },
  },
});
