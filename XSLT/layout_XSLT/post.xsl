<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="resume">

            <table class="table_profile_image"><!--table for profile image-->
                <image class="profile-panel-img" src=<xsl:value-of select="block/content/brand_url"/>/>
            </table>
            <table class = "table_profile_name"><!--table for candidate name-->
                <row>
                    <column>
                        <text class="user-full-name"><xsl:value-of select="block/content/full_name"/></text>
                    </column>
                    <column>
                        <text class="place"><xsl:value-of select="block/content/place"/></text>
                    </column>
                </row>
            </table>
       
            <table ><!--table for skill box-->
                <xsl:for-each select = "block/content/skills/skill">
                    <row class="skill_row"><!--loop-->
                        <column>
                            <text class="skill_title"><xsl:value-of select="skill_title"/></text>
                        </column>
                        <column>
                            <geometry_star>**</geometry_star>
                        </column>
                    </row>
                </xsl:for-each>
            </table>
        <geometry_rect class="geometry_box">
            <text class="geometry_rect_title">Education</text>
            <bottom_line class="border-bottom"/>
        </geometry_rect>
        <xsl:for-each select = "block/content/years/year_event">
        <xsl:choose>
        <xsl:when test="course">
            <table><!--loop-->
                <row>
                    <column class="geometry_container"><geometry_circle  class="course_circle"/></column>
                    <column ><text class="course-title"><xsl:value-of select="course"/></text></column>
                </row>
                <row>
                    <!-- <column><geometry_hline class="course_hline"/></column> -->
                    <column><text><xsl:value-of select="college"/></text></column>
                </row>
                <row>
                    <column><text><xsl:value-of select="university"/></text></column>
                </row>
                <row>
                    <column><text class="course-duration"><xsl:value-of select="start_month"/> 
                                    <xsl:value-of select="start_year "/> -
                                    <xsl:value-of select="end_month "/>&#160;
                                    <xsl:value-of select="end_year "/>
                            </text>
                    </column>
                </row>
                <row>
                    <column><text class="course-narration"><xsl:value-of select="narration"/></text></column>
                </row>
                <row>
                    <column>
                    <table class="course-achievement-title">
                        <xsl:for-each select = "achievements/achievement">
                            <row>
                                <column><text><xsl:value-of select="narration"/></text></column>
                            </row>  
                        </xsl:for-each> 
                        </table>
                    </column>
                </row>
                <row><!--loop-->
                    <column><geometry_line class="course_hline"/></column>
                </row>
            </table>
        </xsl:when>
        </xsl:choose>
        </xsl:for-each> 

        <!-- Experience section -->
        <xsl:for-each select = "block/content/years/year_event">
        <xsl:choose>
        <xsl:when test="organization">
            <table><!--loop-->
               <row>
                    <column class="geometry_container"><geometry_circle class="course_circle"/></column>
                    <column><text class="course-title"><xsl:value-of select="organization"/></text></column>
                </row>
                <row>
                    <column><text><xsl:value-of select="position"/></text></column>
                </row>
                <row>
                    <column><text><xsl:value-of select="start_month"/> 
                                    <xsl:value-of select="start_year "/> -
                                    <xsl:value-of select="end_month "/>&#160;
                                    <xsl:value-of select="end_year "/>
                            </text>
                    </column>
                </row>
                <row>
                    <column><text><xsl:value-of select="narration"/></text></column>
                </row>
                <row><!--loop-->
                    <column><geometry_line></geometry_line></column>
                </row>
            </table>
            </xsl:when>
            </xsl:choose>
            </xsl:for-each> 
    </xsl:template>
</xsl:stylesheet>