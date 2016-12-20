import Reasct from 'react';

import styes from './header.css';

const Header = (loggedin, page, ...props) => {
  return (
    <header className={styles.header}>
      {loggedin ? (
        <nav class="container">
					<section class="row">
						<div class="one-full column text-middle">
							<a href="./index.html"><i class="emoji navmoji">:dollar:</i></a>
							<span>
                <a href="./app.html" class="selected"><i class="emoji navmoji" id="cash">:money_with_wings:</i> <!-- EMOJI --></a>
                <a href="./analysis.html"><i class="emoji navmoji" id="analysis">:chart_with_upwards_trend:</i></a>
                <a href="./budgets.html"><i class="emoji navmoji" id="budget">:ballot_box_with_check:</i></a>
                <a href="./account.html"><i class="emoji navmoji" id="account">:gear:</i></a>
							</span>
						</div>
					</section>
				</nav>
      ) : (

      )}
    </header>
  )
};