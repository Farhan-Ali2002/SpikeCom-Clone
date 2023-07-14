import React from "react";
import logo from "../../../images/logo-dark.png"
import "../../../index.css"
import "../index.css"
import { NavLink } from "react-router-dom";
function CompaignManagement(params) {
    return (
        <div>
        <section className='doc-top-section'>
            <header className="doc-header">
            <div className="navbar-wrapper">
            <nav className="navbar">
            
            <img className = "logo" height="40px"  src={logo}></img>
          
            {/* <Navbar/> */}
    
            <button className="sign-in-btn">SIGN-IN NOW</button>
            </nav>
            </div>
          </header>    
            <div className='search-banner d-flex justify-center'>
                <div className='wrapper text-center p-3'>
                    <h1>SpikeCom Knowledge Base</h1>
                    <p class="fs-16">Everything you need to know about SpikeCom</p>
                    <form autocomplete="off" action="/documentation">
                    <div class="autocomplete ">
                        <input id="docSearch" type="text" name="docSearch" placeholder="What are you looking for?">
                        
                        </input>
                        <button type="submit">search</button>
                        
                    </div>
                    <p className='text-center'>Document Release Notes</p>
                    
                </form>
    
    
                </div>
            </div>
            </section>
            <section className="doc-contents">
                <div className="doc-wrapper ">
                    <div className="content-header d-flex justify-between">
                        <p className="updated">
                            <span>Created : Feb, 04, 2016</span> | 
                            <span>Last Updated: April, 15, 2016</span>
                        </p>
                        <div className="breadcrum">
                            <NavLink to="../">SpikeCom Documentation</NavLink>
                            {"=>"}
                            <NavLink to="">Introduction</NavLink>
                        </div>
                    </div>
                </div>
                <div className="doc-wrapper d-flex">
                    <div className="doc-sidebar w-30">
                        <h2>Quick Navigation</h2>
                        <ul>
                        <li>
                                <NavLink to="/docs/introduction">Introduction</NavLink>
                            </li>
                            <li>
                                <NavLink to="/docs/roles-and-settings">Role Settings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/docs/brands-information-and-configuration">Brands information and Configuration</NavLink>
                            </li>
                            <li>
                                <NavLink to="/docs/target-data-keys">Target Data keys</NavLink>
                            </li>
                            <li>
                                <NavLink to="/docs/settings-and-configuration">Settings and Configurations</NavLink>
                            </li>
                            <li>
                                <NavLink to="/docs/placement-settings-and-configuration">Placement Settings and Configurations</NavLink>
                            </li>
                            <li>
                                <NavLink to="/docs/target-segments">Target Segments</NavLink>
                            </li>
                            <li>
                                <NavLink to="/docs/compaign-management">Compaign Management</NavLink>
                            </li>
                            <li>
                                <NavLink to="/docs/account-settings">Account Settings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/docs/product-information-and-configuration">Product information and Configuration</NavLink>
                            </li>
                            <li>
                                <NavLink to="/docs/target-groups">Target Groups</NavLink>
                            </li>
                            <li>
                                <NavLink to="/docs/advertiser-settings-and-configuration">Advertiser Settings and Configuration</NavLink>
                            </li>
                            <li>
                                <NavLink to="/docs/integration">Integrations</NavLink>
                            </li>
                            <li>
                                <NavLink to="/docs/adserving-and-refresh-logic">Ads Serving and Refresh Logic</NavLink>
                            </li>
                        {/* <li>
                            <NavLink>Introduction</NavLink>
                        </li> */}
    
                    </ul>
                    </div>
                    <div class="doc-main">
                <h1>Campaign Management</h1>
                <p>In Spike campaign is a group of ads that an advertiser can create.</p>
                <h2>Configuration</h2>
                <ul>
                    <li>
                        Advertiser will have to specify campaign name , its type and schedule. Currently spike offers support for two types of campaigns 1-Standard and 2-Email.
                    </li>
                    <li>
                        Standard type campaign allows ad-creation on all standard types of placement objects like, Main Banner , Strip Banner , Search , Product , Brand , Pop-up , Push-Notification , Content Card and Others
                    </li>
                    <li>
                        Email type campaign allows ad-creation on email type of placement objects like, Main Banner , Strip Banner and Html.
                    </li>
                    <li>
                        If campaign is being created by Spike admin then advertiser selection is also needed , else for advertisers it will be auto selected.
                    </li>
                    <li>
                        Multiple publishers can be selected for single campaign from list of assigned publishers to this selected advertiser.
                    </li>
                    <li>An optional campaign description can be stated here as well.</li>
                    <li>
                        Campaign budget deails must be given by selecting budget currency , value and payout model. Supported currencies are USD and SAR where as supported payout models are CPM (Cost Per Mille) and CPD (Cost Per Day).
                    </li>
                    <li>
                        Auto optimize budget can be set true here as well as campaign level quota can be set here as well.
                    </li>
                    <li>
                        Right after creating campaign, user is redirected to ad creation wizard window inside that campaign.
                    </li>
                    <li>
                        The wizard has following tabs Ad-Item Settings , Scheduling , Targeting , Quota and Preview.
                    </li>
                    <li>
                        The wizard allows user to specify multiple ad-item settings for different ads together and click on AddtoList button and then specify their scheduling , targeting and quota settings which will be commonly applied to all such ads which are created together.
                    </li>
                    <li>
                        First publisher selection is needed from list of publishers assigned to this campaign.
                    </li>
                    <li>
                        Placement groups of that publisher are loaded which needs to be selected next.
                    </li>
                    <li>
                        Placements of that placement group are loaded which needs to be selected next.
                    </li>
                    <li>
                        After placement selection Ad-Title is auto-filled with default value which can be modified if needed.
                    </li>
                    <li>
                        Ad type Image and Raw-HTML is allowed for selection. Raw-HTML is not allowed for such placements whose object type is among Product , Search , Brand , Push-Notification and Content-Card.

                    </li>
                    <li>
                        Ad Schedule is allowed for modification , bydefault whole campaign duration is selected for ad schedule. Ad scheudle can be modified to an extent where the whole ad duration remains inside of campaign duration. Specific dates selection allows to select for specific dates from ad-schedule.
                    </li>
                    <li>
                        Destination URL is the link of page where upon click on this ad it needs to redirect to.
                    </li>
                    <li>
                        If Ad-Type is image , image creative upload option in all the publisher languages will be shown. Possible ways to upload an image is From URL , From Local System , From Media-Library.
                    </li>
                    <li>
                        Target window specifies click on ad will open destination url is same or new window.
                    </li>
                    <li>
                        Alternative text is text to display if image is not displayed. Tracking Pixel link can be added optionaly with this ad-item.
                    </li>
                    <li>
                        Meta Data can be added dynamically as per user need per ad-item. There are however some system defined mandatory meta data in some cases , like for push-notification Title and Message are mandatory similarly for content-card card-title and description are mandatory.
                    </li>
                    <li>
                        Add to List button will add current ad-item details in grid below and refresh all above fields for the user to fill with new ad-item information
                    </li>
                    <li>
                        Users are allowed to create as many ads together as they want using this approach and afterwards click on next will take them on the next tab which is Scheduling.
                    </li>
                    <li>
                        In Scheduling you can set under delivery behavior for the set of ads we created together in previous tab. System checks on impressions per ad inside a campaign and set 25% of highest performing ad as threshold. All ads having impression count less then this are treated as under performing and all ads having impression count higher then this are treated as good performing ads. Based on the selection in Under Delivery Behavior , all under performing ads are either stopped for serving further or still continued to be served.
                    </li>
                    <li>
                        Day parting logic allows you to select specific hours of specific days, which makes sure that these ads are only served during these hours of these days inside the ad-schedule.
                    </li>
                    <li>
                        Per user limit and Daily limit can be specified by advertiser which will be tied with these ads and it will become part of response incase if json type placement tag is used for the publisher.
                    </li>
                    <li>
                        Next is targeting tab, which allows us to select any existing target group or target segment which will automatically apply all generic field and custom field rules to these ads or allows advertiser to fill generic field values themselves for these ads. These targeting fields are part of response in json type placement tag which can be used by the publisher to target specific audience for these ads.
                    </li>
                    <li>
                        Unlike campaign quota ad level quota can be set on any one of following Clicks, Impressions or Conversions. Once any ad quota is met that ad is treated as completed and will not be part of any serving further.
                    </li>
                    <li>
                        Next preview of ads created through this wizard will be shown to verify before finishing. Upon finishing campaign checkout window will be shown. Advertiser must verify all campaign related and ad related information is correct and then proceed further to checkout. Upon checkout system will ask for uploading PO against each publisher involved in the campaign and has ads configured on their placements. After uploading PO for each publisher there will be an option to review each PO for the Spike Admin. Spike Admin will need to review each uploaded PO and either request new or approve existing ones. Once Spike Admin have approved all publisher PO , advertiser can publish this campaign. Upon publishing , publishers involved in this campaign will be notified to accept or reject this campaign using their spike account. Publishers can then view this campaign and either accept or reject it. If publisher accepts the campaign , their ads would go in Active or Running state depending upon the start of ad i.e its schedule. When they are in Running state they are being served agains their placement tag. If publisher rejects the campaign , their ads never go in Active or Running state and such ads will not be served. Incase of multiple publishers and some accepting and some rejecting the campaign will result in only ads of those publishers which have accepted the campaign to go in Active or Running state. Others who rejected the campaign will not have any ads running on their placements from this campaign.
                    </li>
                    <li>
                        Advertiser , Publisher as well as Spike Admin all can view the campaign to not only see the progress of that campaign i.e at what stage this campaign is but also they can check the performance of ads inside this campaign at all times.
                    </li>
                </ul>
            </div>
                    
    
    
                </div>
    
            </section>
        <div/>
        </div>
        )
}
export default CompaignManagement