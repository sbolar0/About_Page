import React, { useState, useContext } from "react";

import styles from "../Styles/Pages/About.module.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Collapsible from "../Components/Collapsible";

export default function About() {
  return (
    <div>
      <Header />
      <div className={styles.Main}>
        <div className={styles.bioMainContainer}>
          <div className={styles.formTitle}>Coast to Coast Creators</div>
          <div className={styles.bioContainer}>
            <div>
              <Collapsible label="Cameron">
                <div className={styles.bioalign}>
                <p>
                Cameron Zuziak is finishing his final semester in the Master of Applied Computer Science program at Frostburg State University. He holds a bachelor’s degree in Speculative Design and Design Computing from University of California San Diego.  Cameron is currently a computational designer at JZMK Partners – an international Architecture and Urban Planning firm. At JZMK, Cameron draws on his technical knowledge to automate  design workflows through the development of software that         interfaces with various CAD applications. He has successfully saved his employer countless hours of work through the novel  solutions he has implemented. Outside of his occupation, he has an interest in decentralized finance and algorithmic trading of cryptocurrencies. Cameron brings various skills to the table, including Python, Java, JavaScript, SQL, and PHP.
                </p>
                </div>
              </Collapsible>
            </div>
            <div>
              <Collapsible label="Mark">
              <div className={styles.bioalign}>
                <p>
                  Mark Ross is entering his second semester in the Master of
                  Applied Computer Science program. He has an undergraduate
                  degree in Information Networking and Telecommunications with a
                  concentration in Web Development from Fort Hays State
                  University. Mark is employed as a Senior Cloud Engineer with
                  Ampsight, Inc. where he develops and maintains cloud native
                  infrastructure solutions supporting machine learning, data
                  analytics, cybersecurity, and cloud migration projects for
                  various government agencies. Prior to his current role he was
                  employed as a Cloud Engineer for General Dynamics Information
                  Technology (GDIT) in addition to 20 years of active-duty Navy
                  experience as an Information Systems Technician. Mark brings a
                  strong work ethic, 25 years of Information technology and
                  telecommunications experience in diverse technical roles, and
                  extensive experience leading technical teams ranging in size
                  from three to 200 members. Mark is proficient with various
                  DevOps tools including Kubernetes, Linux, and shell
                  scripting.Mark has programming experience with Python,
                  PHP,JavaScript, and Java
                </p>
                </div>
              </Collapsible>
            </div>
            <div>
              <Collapsible label="Rita">
              <div className={styles.bioalign}>
                <p>
                  Rita Hegeman is completing her final semester in the Master of
                  Applied Computer Science, Database Concentration program. She
                  has undergraduate degrees in Physics and Mathematics, and __
                  credits towards an MBA with a Business Analytics
                  concentration. She is currently employed as a software
                  engineer with vCalc, LLC where she is responsible for
                  maintaining a mortgage banking reporting system for Fannie
                  Mae, Ginnie Mae, and Freddie Mac. This web-based system is
                  written in Perl and Java, and uses a PostgreSQL database in
                  the backend. She also has 25 years of experience as the
                  director of an educational program. In this capacity she
                  successfully wrote and administered a $350,000 annual US
                  Department of Education grant, and developed several
                  extensive, menu drive MS ACCESS databases. The strengths she
                  brings to this team included self-motivation, organization,
                  database experience, and programming experience in Perl, Java,
                  Python, VBA, and PHP
                </p>
                </div>
              </Collapsible>
            </div>
            <div>
              <Collapsible label="Ryan">
              <div className={styles.bioalign}>
                <p>
                  Ryan Beebe is entering his second semester in the program. He
                  has an undergraduate degree in Marketing from Saint Joseph’s
                  university in Philadelphia, PA. Ryan currently works as an
                  Application Developer at GEICO in Chevy Chase, MD, a position
                  he has held since the end of 2021. Ryan’s position entails
                  developing and maintaining a suite of applications that assist
                  pricing actuaries in determining insurance rate changes. Prior
                  to that, Ryan had worked with the marketing department at
                  GEICO to identify potential areas of process improvement and
                  implement automated solutions. Ryan has professional
                  experience working with Python, React, JavaScript, SQL, and R
                  as well as personal development experience in Java. Specific
                  subdomains that Ryan is interested in are web scraping, Python
                  scripting, and machine learning. Ryan brings a strong work
                  ethic, capable problem-solving skills and experience in
                  several modern programming languages/toolsets to the team.
                </p>
                </div>
              </Collapsible>
            </div>
            <div>
              <Collapsible label="Supreetha">
              <div className={styles.bioalign}>
                <p>
                  Supreetha Bolar is starting her first semester in the Master
                  of Applied Computer Science program at Frostburg State
                  University. She holds an undergraduate degree in Information
                  Science and Engineering from Visvesvaraya Technological
                  University, India. She has around 6 years of experience
                  working in the IT industry and 1.5 years of working experience
                  as a Software testing Tutor. She worked for the client
                  Philips, Mphasis, SnapOne India, and Miracle Prop. She has
                  experience in testing software applications, Web development,
                  and Android Development. She has domain experience in Health
                  Care, Insurance, and Real estate and Property and Good
                  Experience with bug tracking tools like JIRA, Bugzilla, HP
                  ALM, CQ. Supreetha has good exposure to Software Engineering
                  Processes and is familiar with various Life Cycle Models like
                  ‘Verification and Validation’ Model and Agile. She is
                  interested in learning about modern technologies
                </p>
                </div>
              </Collapsible>
            </div>
          </div>
        </div>
        <div className={styles.rightCont}>
          <div className={styles.aboutProjectContainer}>
            <div className={styles.formTitle}>About Our Project: </div>
            <div className={styles.paragraph}>
            <p>
            Stock and cryptocurrency tracking application helps for improvement in stock tracking both in the functionality offered and the UI 
            presentation. Traditional stock and financial trading platforms tend to be too esoteric and complicated to understand for the average 
            user We plan to find a middle ground of providing a highly functional application without being overwhelming or difficult to parse for an end user.
            </p>
            </div>
          </div>
          <div className={styles.questionCont}>
            <div className={styles.formTitle}>Frequently Asked Questions</div>
            <div className={styles.frequentlyborder}>
            <div>
               <Collapsible label="What Is The Stock Market?">
                <div className={styles.frequently}>
                <p>
                Investing to reach financial freedom is a dream many people share but few ever achieve. To many, one of the best ways to achieve that is to get started in the stock market. So, here begs the question, what is the stock market? The term “stock market” often refers to the collection of markets and exchanges where regular activities of buying, selling, and issuance of shares take place. Simply put, the stock market enables buyers and sellers to make a trade of shares of publicly-listed companies.
                </p>
                </div>
              </Collapsible>
            </div>
            <div>
              <Collapsible label="How Does The Stock Market Work?">
              <div className={styles.frequently}>
                <p>
                It is also worth mentioning that the stock market isn’t exactly like a grocery store. To buy and sell stocks, you need to go through an intermediary known as a licensed brokerage. That’s because the stock market is a secured and regulated environment where market participants can trade shares with low, if not zero operational risk. 
                </p>
                </div>
              </Collapsible>
            </div>
            <div>
              <Collapsible label="What Time Does The Stock Market Open?">
              <div className={styles.frequently}>
                <p>
                The regular trading hours for the U.S. stock market, including the New York Stock Exchange and the Nasdaq are from 9.30 a.m. to 4 p.m. Eastern time on weekdays (apart from stock market holidays)
                </p>
                </div>
              </Collapsible>
            </div>
            <div>
              <Collapsible label="Is The Stock Market Open On Weekends">
              <div className={styles.frequently}>
                <p>
                Considering the advancement of technology today, it’s natural for some investors to ask – why don’t stocks trade over weekends? Especially when cryptocurrencies are trading 24/7. As you probably know, there are no regular trading hours for stocks on Saturdays or Sundays. However, if you see a headline on Sunday night saying that stock futures are up, that’s because the futures market begins trading at 6 p.m. Eastern time on Sundays. 
                </p>
                </div>
              </Collapsible>
            </div>
            <div>
              <Collapsible label="How To Invest In The Stock Market">
              <div className={styles.frequently}>
                <p>
                You are now ready to put your money into the best wealth generator: the stock market. The question here is how to invest in the stock market for beginners? How to invest money in the stock market for beginners can be confusing at best. Investing requires you to set aside money while you are busy with life and have that money work for you so you can reap the rewards of your labor in the future. 
                Let’s assume you have set aside $10,000, and you’re ready to enter the investment world. So, what happens next? The decision to hire a financial advisor or to simply do the research on your own to pick the best stocks to buy is entirely up to your own free will. Investing in the stock market might be easier than many would’ve thought as all you need is an online brokerage account to get started. There are, however, a set of questions you need to ask yourself before embarking on the investing journey.
                </p>
                </div>
              </Collapsible>
            </div>
            <div>
              <Collapsible label="What Caused The Stock Market Crash Of 1929?">
              <div className={styles.frequently}>
                <p>
                During the 1920s, the U.S. stock market underwent rapid expansion, reaching its peak in August 1929 after a period of wild speculation during the roaring twenties. It was called the “Roaring Twenties” as it was a period of economic prosperity with a distinctive cultural edge in the U.S. and Europe. However, that era came to an abrupt end on October 29, 1929, when the stock market crashed. Billions of dollars were lost, wiping out thousands of investors. The crash began on October 24, 1929, known as “Black Thursday”, when the market opened 11% lower.

                In the aftermath of Black Thursday, the U.S. and the rest of the industrialized world spiraled downward for an extended period, known as the Great Depression. It was the deepest and longest-lasting economic downturn in the history of the Western Industrialized world up to that time.
                </p>
                </div>
              </Collapsible>
            </div>
            <div>
              <Collapsible label="How Is The Stock Market Doing Today?">
              <div className={styles.frequently}>
                <p>
                When it comes to this question, the answer really depends on who you ask. If we are only looking at the broader indices, you would without hesitation say it has been great to be an investor in the stock market today. With the broader indices continuing to make new all-time highs, many investors may be seeing strong gains in their portfolio this year. After all, the S&P 500 is up by over 11% this year alone. Taking a step back, the unprecedented recovery we saw in March 2020 had caught a lot of investors’ attention. 2020 was certainly the year many new investors came to the stock market for the first time. And for good reasons.
                One of the most concentrated investments has been on stay-at-home stocks. This came after many investors were quick to jump into some of the top growth stocks in the stock market. For example, stay-at-home plays such as Zoom (NASDAQ: ZM), Netflix (NASDAQ: NFLX), and Peleton (NASDAQ: PTON) are those that benefit from the stay-at-home measures in place during the lockdowns. If you got in shortly after the stock market crash in March 2020 brought on by the coronavirus pandemic, you would have reaped significant profits. You would still be sitting on nice gains despite the correction in growth stocks in the past few weeks. 

                But in the stock market today, tech and electric vehicles may no longer be the only sectors you need to go for growth. With Biden’s infrastructure bill, industrial stocks have also been in the limelight. Given the strong uptick in vaccination rates in the U.S., there has also been an ongoing rotation from hyper-growth stocks like tech stocks to reopening stocks. The latter include the likes of stocks in the tourism and airline sectors. Nevertheless, many parts of the world are not exactly out of the woods yet with regards to the pandemic. Therefore, one should tread cautiously even with reopening stocks. These are interesting times in the stock market, and we hope you have a fruitful journey.
                </p>
                </div>
              </Collapsible>
            </div>
            <div>
              <Collapsible label="What Are U.S. Stock Futures?">
              <div className={styles.frequently}>
                <p>
                Before knowing what U.S. stock futures are, it is important to understand the definition of futures. Futures generally refer to a contract that stipulates the buying or selling of a specified commodity for a certain price at a specific point in time in the future. So, what does it mean when the futures trade higher ahead of the opening bell? It simply means these indices will trade higher following the opening bell. Simply put, it is an indication of how the market sentiment will be when the market opens.
                </p>
                </div>
              </Collapsible>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
