import React from "react";
import logo from "../../../images/logo-dark.png"
import "../../../index.css"
import "../index.css"
import DocTopSection from "../components/doc_top_section";
import Footer from "../../../components/footer";
import DocSidebar from "../components/doc_sidebar";
function AdServing(params) {
    return <div>
        <DocTopSection/>
        <section class="doc-contents">
        <div class="wrapper doc-wrapper">
            <div class="content-header d-flex justify-between">
                <p class="updated"><span>Created : Feb, 04, 2016</span> | <span>Last Updated: April, 15, 2016</span></p>
                <div class="breadcrum">
                    <a href="../">SpikeCom Documentation</a>
                    <a href="javascript:void(0)">Ads Serving &amp; Refresh Logic</a>
                </div>
            </div>
        </div>
        <div class="doc-wrapper d-flex">
           <DocSidebar/>
            <div class="doc-main">
                <h1>Ads Serving &amp; Refresh Logic</h1>
                <p> When the placement tag is used, it sends a request to our server for serving an Ad against this
                    placement, Ads are served from our server based on this logic.</p>
                <h2>Logic</h2>
                <p>The server then</p>
                <ol>
                    <li>Fetches all 'Running' Ads against this placement.</li>
                    <li>It filters from above Ads based on Day-Parting Logic i.e to keep those Ads only which have no
                        day parting logic defined or have current hour-day inside it's day parting logic.</li>
                    <li>It then removes all Ads from the above filtered list which are marked as Under-Performing and
                        have Under Delivery Behavior set to "Stop".</li>
                    <li>It then filters all Ads based on 'ageGroup' set on them and the supplied 'ageGroup' parameter if
                        any in the request call to our server.</li>
                    <li>It then filters all Ads based on 'gender' set on them and the supplied 'gender' parameter if any
                        in the request call to our server.</li>
                    <li>It then filters all Ads based on 'keywords' set on them and the supplied 'extraData' parameter
                        if any in the request call to our server.</li>
                    <li>It then filters all Ads based on 'longitutde' and 'lattitude' inside the given radius and checks
                        if the supplied longitude and latitude falls inside it, if yes keeps those ads else filters them
                        out.</li>
                    <li>It then filters all Ads based on datakeys supplied in the request call to our server and those
                        ads which have target segments assigned and have datakeys equal to the supplied datakeys then
                        check what rule is set in that segment on that data key then matches the supplied key's value is
                        in accordance with that rule then it keeps that ad else filters it out. Below is the logic for
                        each rule-set
                        <ul class="mt-3">
                            <li>Operator : <strong>"eq"</strong> , Logic: value for this key must be equal to the value
                                in rule.</li>
                            <li>Operator : <strong>"neq"</strong> , Logic: value for this key must not be equal to the
                                value in rule.</li>
                            <li>Operator : <strong>"lt"</strong> , Logic: value for this key must be less then to the
                                value in rule.</li>
                            <li>Operator : <strong>"lte"</strong> , Logic: value for this key must be less then or equal
                                to the value in rule.</li>
                            <li>Operator : <strong>"gt"</strong> , Logic: value for this key must be greater then to the
                                value in rule.</li>
                            <li>Operator : <strong>"gte"</strong> , Logic: value for this key must be greater then or
                                equal to the value in rule.</li>
                            <li>Operator : <strong>"sw"</strong> , Logic: value for this key must be starting with the
                                value in rule.</li>
                            <li>Operator : <strong>"ew"</strong> , Logic: value for this key must be ending with the
                                value in rule.</li>
                            <li>Operator : <strong>"con"</strong> , Logic: value for this key must contains the value in
                                rule.</li>
                        </ul>
                    </li>
                    <li>It then filter Ads based on <strong>serving priority</strong> and their served count, in
                        following manner,
                        <br/><br/>Lets say we have 3 Ads remaining in the filtered Ad list , 1 having serving priority
                        = high , 2 having serving priority = medium and 3 having serving priority = low and each Ads are
                        not yet served i.e their current served count = 0 , so in the first ad-serving call system will
                        serve Ad # 1(high) , in second serving or refresh call system will again serve Ad # 1 (high), in
                        third serving or refresh call system will again serve Ad # 1(high) , in fourth serving or
                        refresh call system will serve Ad # 2(medium) , in fifth serving or refresh call system will
                        serve Ad # 2(medium) , in sixth serving or refresh call system will serve Ad # 3(low) , so upon
                        serving 6 times on this placement 1st 3 time it serves Ad#1 then 4th and 5th time it serves Ad#2
                        then 6th time it serves Ad#3 , meaning High Priority Ad Items will be served 3 times more then
                        Low Priority Ad Items and Medium Priority Ad Items will be served 2 times more then Low Priority
                        Ad Items.
                    </li>
                    <li>
                        <strong>count</strong>: In the request for ad serving call there is an optional parameter
                        'count' (int) , it has default value = 1 if not supplied as well as for type = 'js' and 'iframe'
                        it is defaulted to 1 , meaning 1 ad from the filtered remaining ones will be served in response
                        to serve request and refresh request. for type = 'json' whatever count value is supplied ,
                        system will respond with that many ads if it finds that many ads after above filtration logic.
                        (Note: Serving Priority and Serve Count filtration logic is not applicable in case of count is
                        not equal to 1 and count is not defaulted to 1 i.e when count = some value other then 1 is
                        supplied system will not filter ads based on their serving priority &amp; serve count and will try
                        to serve that many ads as asked if it finds that many ads after rest of filtration logic has
                        been applied)
                    </li>
                    <li><strong>groupPlacements</strong>: In the request for ad serving call there is an optional
                        parameter 'groupPlacements' (boolean) which is to allow serving ads from multiple placements
                        inside a single placement group , the group is identified from the placementId supplied.</li>
                    <p>There is a configurable flag at placement level 'Multiple Advertisers Serving' which allows same placement to be used for multiple advertiser campaigns for same time, in such case if after above filtration logic ads remaining from multiple advertisers still remained and not filtered out system will serve ads based on count value from the remaining ads.</p>
                </ol>

            </div>
        </div>
    </section>
        <Footer/>
    </div>
}
export default AdServing