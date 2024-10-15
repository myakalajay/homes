import React from 'react'
import Idealproperty from './IdealProperty';
import LendingJourney from './LendingJourney';
import MonthlyPayment from './MonthlyPayment';
import Navigating from './Navigating';
import SideMenu from './SideMenu';
import Trycalculator from './TryCalculator';
import ScrollText from './scrollText';
import HomeBanner from './HomeBanner';

export default function () {

  return (
    <div>
        <HomeBanner/>
        <ScrollText/>
      <Idealproperty/>
      <MonthlyPayment/>
      <Trycalculator/>
      <LendingJourney/>
      <SideMenu/>
      <Navigating/>
    </div>
  )
}
