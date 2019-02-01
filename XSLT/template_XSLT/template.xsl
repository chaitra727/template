<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="resume">
<html>
    <head>
    <meta charset="UTF-8"/>
    <title>template-3</title>
        <link href="template-3.css" rel="stylesheet" type="text/css"/>
        <link href="fonts.css" rel="stylesheet" type="text/css"/>
        
    </head>
    <body>
        <div id="template-container" class="winter-timeline-panel template-three under-edit-mode edit-mode" style="min-height: 100vh;">
            <div class="profile-panel profile-panel-with-skill-panel template-single-panel" data-layout-id="7a1e625fc227c37b459ae335f5039637a68d31e2">
                <div class="row-btn-wrapper template-panels-edit-options-contianer" style="display: none;">
                    <div class="btn-panel">
                        <button class="btn-iButton no-hover tool">
                            <span>
                                <span>
                                    <img src="images/winter/button-icons/move-up.png" alt="button"/>
                                </span>
                            </span>
                        </button>
                    </div>
                    <div class="btn-panel">
                        <button class="btn-iButton no-hover tool">
                            <span>
                                <span>
                                    <img src="images/winter/button-icons/move-down.png" alt="button"/>
                                </span>
                            </span>
                        </button>
                    </div>
                    <div class="btn-panel">
                        <button class="btn-iButton no-hover tool">
                            <span>
                                <span>
                                    <img src="images/winter/button-icons/edit-icon-enabled.png" alt="button"/>
                                </span>
                            </span>
                        </button>
                    </div>
                    <div class="btn-panel">
                        <button class="btn-iButton no-hover tool">
                            <span>
                                <span>
                                    <img src="images/winter/lipsi/skill-icon.png" alt="button"/>
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
                <div class="panel-box">
                    <div class="profile-panel-wrapper" style="width:100%;">
                        <div style="width:100%; display:block; background-color:#000000; padding-top:36px; padding-bottom:16px;">
                            <div>
                                <div style="width:100%;" class=" profile-img-wrapper">
                                    <img id="profile-panel-img" style="display:block; margin:auto; margin-bottom:16px;" alt="profile pic" src="data:image;base64,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"/>
                                </div>
                                <div style="width:100%; display:block; margin-bottom:16px;">
                                    <p class="user-full-name">Ronnie</p>
                                    <p class="address" style="display: none"></p>
                                    <p class="place" style="display: block;">Bangalore, INDIA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel-box" style="width:100%;">
                        <div class="skill-list-table" style="position:relative;width:100%;padding:0 5%; padding-top:32px; padding-bottom:16px; z-index:1;">
                            <div style="position:absolute; left: 0;top: 0;width:100%; height:50%; background-color:#000000; z-index:-1;"></div>
                            <div class="skill-main-panel" style="margin:auto; display:block; background-color:#ffffff;box-shadow:0 0 10px rgba(0,0,0,.25); padding:12px;">
                                <table cellpadding="7" width="500" height="250" style="line-height: 1.2; word-wrap: break-word;max-width: 100%;font-size: 12px;font-family: sans-serif;">
                                    <xsl:for-each select = "block/content/skills/skill"> 
                                        <tr>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <td><xsl:value-of select="skill_title"/></td>
                                            <td>***</td>
                                        </tr>
                                    </xsl:for-each>                                   
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
            <!-- End of PROFILE section-->
            <div class="row-narrative template-single-panel" data-narrationid="e7664c8358a798afc1c39ab86b416580688e6fe3" data-layout-id="e7664c8358a798afc1c39ab86b416580688e6fe3">
                <div class="row-btn-wrapper template-panels-edit-options-contianer" style="display: none;">
                    <div class="btn-panel">
                        <button class="btn-iButton no-hover tool">
                            <span>
                                <span>
                                    <img src="images/winter/button-icons/move-up.png" alt="button"/>
                                </span>
                            </span>
                        </button>
                    </div>
                    <div class="btn-panel">
                        <button class="btn-iButton no-hover tool">
                            <span>
                                <span>
                                    <img src="images/winter/button-icons/move-down.png" alt="button"/>
                                </span>
                            </span>
                        </button>
                    </div>
                    <div class="btn-panel">
                        <button class="btn-iButton no-hover tool">
                            <span>
                                <span>
                                    <img src="images/winter/button-icons/edit-icon-enabled.png" alt="button"/>
                                </span>
                            </span>
                        </button>
                    </div>
                    <div class="btn-panel">
                        <button class="btn-iButton no-hover btn-delete tool">
                            <span>
                                <span>
                                    <img src="images/winter/button-icons/delete-icon-enabled.png" alt="button"/>
                                    <img src="images/winter/button-icons/delete-icon-enabled-white.png" class="img-white" alt="missing-delete-icon"/>
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
                <div class="panel-box" style="width:100%; display:block;">
                    <div style="display:flex; width:100%; margin-bottom:6px; border-bottom:1px solid #ff6666;">
                        <div style=" background-color:#ff6666;">
                            <img src="images/lipsi/icons/quote-icon-sample.png" alt="missing-icon" style=" margin:6px;width:16px; height:16px"/>
                        </div>
                        <p class="narrative-title" style="padding:6px 12px; padding-left:3px;">Summary Statement</p>
                    </div>
                    <div class="narrative-narration"><xsl:apply-templates select="block/content/row_narration"/></div>
                </div>
            </div><!--end of the statement block -->
    
            <div class="education-panel template-single-panel">
                <div class="row-btn-wrapper template-panels-edit-options-contianer" style="display: none;">
                    <div class="btn-panel">
                        <button class="btn-iButton no-hover tool">
                            <span>
                                <span>
                                    <img src="images/winter/button-icons/move-up.png" alt="button"/>
                                </span>
                            </span>
                        </button>
                    </div>
                    <div class="btn-panel">
                        <button class="btn-iButton no-hover tool">
                            <span>
                                <span>
                                <img src="images/winter/button-icons/move-down.png" alt="button"/>
                                </span>
                            </span>
                        </button>
                    </div>
                    <div class="btn-panel">
                        <button class="btn-iButton no-hover tool">
                            <span>
                                <span>
                                    <img src="images/winter/lipsi/education-icon.png" alt="button"/>
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
                <div class=" panel-box">
                    <div style="background-color:#ffffff; box-shadow:0 0 10px rgba(0,0,0,.25);padding:12px;">
                        <div class="education-panel-title-wrapper" style="padding-left:100px; width:100%; margin:24px 0;">
                            <div style="width:100%; border-bottom:1px solid #ff6666;">
                                <p class="education-panel-title" style="display:inline-block; padding:6px 12px; background-color:#ff6666; ">Education</p>
                            </div>
                        </div>
                       
                        <div class="course-rows-container">
                            <xsl:for-each select = "block/content/years/year_event"> 
                            <xsl:choose>
                                <xsl:when test="course">
                                <!-- <xsl:otherwise>Nope</xsl:otherwise> -->
                            
                                <div class="course-row">
                                    <div style="width:100%; display:block;padding-left:100px;" class="education-row-inner-wrapper">
                                        <div style="position:relative; width:100%;padding-bottom:6px;">
                                            <div style="position:absolute; left:-51px; top:0; width:1px; height:100%; background-color:#d6d6d6;" class="vertical-line"></div>
                                            <div class="course-title-wrapper" style="display:flex;align-items:center;position:relative;width:100%;padding-bottom:6px;">
                                                <div style="position:absolute;width:100px; height:100%; left:-100px; top:0;" class="circle-symbol-wrapper">
                                                    <div style="position:absolute; left:-1px; right:0; top:0; background-color:#ffffff; margin:auto; width:12px; height:12px; border:2px solid #999999; border-radius:50%; z-index:1;"></div>
                                                </div>
                                                <p class="course-title"><xsl:value-of select="course"/></p>
                                                <div class="course-details-edit-options-container" style="display: none;" data-courseid="3e183f0ec9a2f6b27a205aa3b8f7dfafed66b7a1">
                                                    <div class="show-float-menu-btn-wrapper" style="position: relative;">
                                                        <img class="btn-menu-panel" src="images/winter/button-icons/context-menu.png" alt="img" style="width: 10px;"/>
                                                        <div class="floating-menu-panel" style="display: none;">
                                                            <div class="floating-menu-panel-btn-wrapper">
                                                                <button class="btn-iButton no-hover tool">
                                                                    <span>
                                                                        <span>
                                                                            <img src="images/winter/button-icons/edit-icon-enabled.png" alt="EDIT"/>
                                                                        </span>
                                                                        <span class="btn-title-colunm text-align-left">
                                                                            <span class="btn-title">EDIT</span>
                                                                            <span class="btn-description block">Edit this education.</span>
                                                                        </span>
                                                                    </span>
                                                                </button>
                                                                <button class="btn-iButton no-hover btn-delete tool">
                                                                    <span>
                                                                        <span>
                                                                            <img src="images/winter/button-icons/delete-icon-enabled.png" alt="DELETE"/>
                                                                            <img src="images/winter/button-icons/delete-icon-enabled-white.png" class="img-white" alt="missing-delete-icon"/>
                                                                        </span>
                                                                        <span class="btn-title-colunm text-align-left">
                                                                            <span class="btn-title">DELETE</span>
                                                                            <span class="btn-description block">Delete this education.</span>
                                                                        </span>
                                                                    </span>
                                                                </button>
                                                                <button class="btn-iButton no-hover tool">
                                                                    <span>
                                                                        <span>
                                                                        <img src="images/winter/lipsi/achievement-icon.png" alt="ADD ACHIEVEMENT"/>
                                                                        </span>
                                                                        <span class="btn-title-colunm text-align-left">
                                                                            <span class="btn-title">ADD ACHIEVEMENT</span>
                                                                            <span class="btn-description block">Add achievement like grade, extra curricular activity, etc.,</span>
                                                                        </span>
                                                                    </span>
                                                                </button>
                                                                <button class="btn-iButton no-hover tool">
                                                                    <span>
                                                                        <span>
                                                                            <img src="images/winter/lipsi/assignment-icon.png" alt="ADD ASSIGNMENT"/>
                                                                        </span>
                                                                        <span class="btn-title-colunm text-align-left">
                                                                            <span class="btn-title">ADD ASSIGNMENT</span>
                                                                            <span class="btn-description block">Add an assignment or project you have done during your training.</span>
                                                                        </span>
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style="position:relative;padding-top:6px; padding-bottom:36px">
                                                <p class="course-college" style="display: block;"><xsl:value-of select="college"/></p>
                                                <p class="course-university" style="display: block;"><xsl:value-of select="university"/></p>
                                                <p class="course-duration" style="display: block;"><xsl:value-of select="start_month "/>&#160;
                                                <xsl:value-of select="start_year "/> -
                                                <xsl:value-of select="end_month "/>&#160;
                                                <xsl:value-of select="end_year "/></p>
                                                <div class="course-narration-panel" style="width: 100%; padding: 12px 0px; border-top: 1px solid rgb(239, 239, 239); border-bottom: 1px solid rgb(239, 239, 239); margin-top: 12px; display: block;">
                                                    <p class="course-narration"><xsl:value-of select="narration"/></p>
                                                </div>
                                                <div class="course-achievement-rows-container" style="width: 100%; margin: 12px 0px; display: block;">
                                                    <div style="display:flex;align-items:center;" class="course-achievement-row">
                                                        <!-- <p class="course-achievement-title"> -->
                                                        <table class="course-achievement-title">
                                                        <xsl:for-each select = "achievements/achievement">
                                                            <tr>
                                                                <td><xsl:value-of select="narration"/></td>
                                                            </tr>  
                                                        </xsl:for-each> 
                                                        </table>
                                                        <!-- </p> -->
                                                        <div class="course-achievement-edit-option-container" style="display: none;" data-courseid="3e183f0ec9a2f6b27a205aa3b8f7dfafed66b7a1" data-achievementid="87e0313bc488225ec2c6371120ad7520ae8f94f7">
                                                            <div class="show-float-menu-btn-wrapper" style="position: relative;">
                                                                <img class="btn-menu-panel" src="images/winter/button-icons/context-menu.png" alt="img" style="width: 10px;"/>
                                                                <div class="floating-menu-panel">
                                                                    <div class="floating-menu-panel-btn-wrapper">
                                                                        <button class="btn-iButton no-hover tool">
                                                                            <span>
                                                                                <span>
                                                                                    <img src="images/winter/button-icons/edit-icon-enabled.png" alt="EDIT"/>
                                                                                </span>
                                                                                <span class="btn-title-colunm text-align-left">
                                                                                    <span class="btn-title">EDIT</span>
                                                                                    <span class="btn-description block">Edit this achievement.</span>
                                                                                </span>
                                                                            </span>
                                                                        </button>
                                                                        <button class="btn-iButton no-hover btn-delete tool">
                                                                            <span>
                                                                                <span>
                                                                                    <img src="images/winter/button-icons/delete-icon-enabled.png" alt="DELETE"/>
                                                                                    <img src="images/winter/button-icons/delete-icon-enabled-white.png" class="img-white" alt="missing-delete-icon"/>
                                                                                </span>
                                                                                <span class="btn-title-colunm text-align-left">
                                                                                    <span class="btn-title">DELETE</span>
                                                                                    <span class="btn-description block">Delete this achievement.</span>
                                                                                </span>
                                                                            </span>
                                                                        </button>
                                                                        <button class="btn-iButton no-hover tool move-up">
                                                                            <span>
                                                                                <span>
                                                                                    <img src="images/winter/button-icons/move-up.png" alt="MOVE UP"/>
                                                                                </span>
                                                                                <span class="btn-title-colunm text-align-left">
                                                                                    <span class="btn-title">MOVE UP</span>
                                                                                    <span class="btn-description block">Move this achievement Up.</span>
                                                                                </span>
                                                                            </span>
                                                                        </button>
                                                                        <button class="btn-iButton no-hover tool move-down">
                                                                            <span>
                                                                                <span>
                                                                                    <img src="images/winter/button-icons/move-down.png" alt="MOVE DOWN"/>
                                                                                </span>
                                                                                <span class="btn-title-colunm text-align-left">
                                                                                    <span class="btn-title">MOVE DOWN</span>
                                                                                    <span class="btn-description block">Move this achievement Down.</span>
                                                                                </span>
                                                                            </span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><!--end of course-row-->
                                    </xsl:when>
                                    </xsl:choose>
                                </xsl:for-each> 
                            
                        </div><!--end of the course container-->
                    </div>
                </div>
            </div><!--end of education-->
            <!--end of assignment block-->
            <!--experience block-->
            <div class="experience-panel template-single-panel">
                <div class="row-btn-wrapper template-panels-edit-options-contianer" style="display: none;">
                    <div class="btn-panel">
                        <button class="btn-iButton no-hover tool">
                            <span>
                                <span>
                                    <img src="images/winter/button-icons/move-up.png" alt="button"/>
                                </span>
                            </span>
                        </button>
                    </div>
                    <div class="btn-panel">
                        <button class="btn-iButton no-hover tool">
                            <span>
                                <span>
                                    <img src="images/winter/button-icons/move-down.png" alt="button"/>
                                </span>
                            </span>
                        </button>
                    </div>
                    <div class="btn-panel">
                        <button class="btn-iButton no-hover tool">
                            <span>
                                <span>
                                    <img src="images/winter/lipsi/experience-icon.png" alt="button"/>
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
                <div class="panel-box">
                    <div style="background-color:#ffffff; padding:12px; box-shadow:0 0 10px rgba(0,0,0,.25);">
                        <div class="experience-panel-title-wrapper" style="padding-left:100px; width:100%; padding-left:100px; margin:24px 0;">
                            <div style="width:100%; border-bottom:1px solid #ff6666;">
                                <p class="experience-panel-title" style="display:inline-block;padding:6px 12px; background-color:#ff6666; ">EXPERIENCE</p>                                                        
                            </div>
                        </div>

                        <div class="experience-rows-container">
                            <xsl:for-each select = "block/content/years/year_event"> 
                            <xsl:choose>
                            <xsl:when test="organization">
                                <div class="experience-row">
                                    <div style="width:100%; display:block;padding-left:100px;" class="experience-row-inner-wrapper">
                                        <div style="position:relative; width:100%;padding-bottom:6px;">
                                            <div style="position:absolute; left:-51px; top:0; width:1px; height:100%; background-color:#d6d6d6;" class="vertical-line"></div>
                                            <div class="experience-details-wrapper" style="margin-bottom: 24px;">
                                                <div style="display:flex; align-items:center;position:relative;width:100%;padding-bottom:6px;">
                                                    <div style="position:absolute;width:100px; height:100%; left:-100px; top:0;" class="circle-symbol-wrapper">
                                                        <div style="position:absolute; left:-1px; right:0; top:0; background-color:#ffffff; margin:auto; width:12px; height:12px; border:2px solid #999999; border-radius:50%; z-index:1;"></div>
                                                    </div>
                                                    <p class="org-title"><xsl:value-of select="organization"/></p>
                                                    <div class="experience-details-edit-options-container" style="display: none;" data-experienceid="a4435539d2a9b8094540379b9917ff5097c8dc3b">
                                                        <div class="show-float-menu-btn-wrapper" style="position: relative;">
                                                            <img class="btn-menu-panel" src="images/winter/button-icons/context-menu.png" alt="img" style="width: 10px;"/>
                                                            <div class="floating-menu-panel">
                                                                <div class="floating-menu-panel-btn-wrapper">
                                                                    <button class="btn-iButton no-hover tool">
                                                                        <span>
                                                                            <span>
                                                                                <img src="images/winter/button-icons/edit-icon-enabled.png" alt="EDIT"/>
                                                                            </span>
                                                                            <span class="btn-title-colunm text-align-left">
                                                                                <span class="btn-title">EDIT</span>
                                                                                <span class="btn-description block">Edit this work experience.</span>
                                                                            </span>
                                                                        </span>
                                                                    </button>
                                                                    <button class="btn-iButton no-hover btn-delete tool">
                                                                        <span>
                                                                            <span>
                                                                                <img src="images/winter/button-icons/delete-icon-enabled.png" alt="DELETE"/>
                                                                                <img src="images/winter/button-icons/delete-icon-enabled-white.png" class="img-white" alt="missing-delete-icon"/>
                                                                            </span>
                                                                            <span class="btn-title-colunm text-align-left">
                                                                                <span class="btn-title">DELETE</span>
                                                                                <span class="btn-description block">Delete this work experience.</span>
                                                                            </span>
                                                                        </span>
                                                                    </button>
                                                                    <button class="btn-iButton no-hover tool">
                                                                        <span>
                                                                            <span>
                                                                                <img src="images/winter/lipsi/assignment-icon.png" alt="ADD ASSIGNMENT"/>
                                                                            </span>
                                                                            <span class="btn-title-colunm text-align-left">
                                                                                <span class="btn-title">ADD ASSIGNMENT</span>
                                                                                <span class="btn-description block">Add an assignment or project you were involved in during your tenure here.</span>
                                                                            </span>
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>                                                                    
                                                </div>
                                                <div style="position:relative;">
                                                    <p class="org-position" style="display: block;">
                                                    <xsl:value-of select = "position"/></p>
                                                    <p class="org-duration" style="display: block;">
                                                        <xsl:value-of select="start_month "/>&#160;
                                                        <xsl:value-of select="start_year "/> -
                                                        <xsl:value-of select="end_month "/>&#160;
                                                        <xsl:value-of select="end_year "/>
                                                    </p>
                                                    <div class="org-narration-panel" style="width: 100%; padding: 12px 0px; border-top: 1px solid rgb(239, 239, 239); border-bottom: 1px solid rgb(239, 239, 239); margin-top: 12px; display: block;">
                                                        <p class="org-narration"><xsl:value-of select = "narration"/></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </xsl:when>
                            </xsl:choose>
                            </xsl:for-each>
                        </div>
                    </div>
                </div>
            </div>	
        </div>
                                    
    </body>
</html>
</xsl:template>
</xsl:stylesheet>