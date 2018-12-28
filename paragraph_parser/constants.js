
module.exports = function(pwidth, pheight) {
    this.PAGE_WIDTH = pwidth;
   // this.age = age;
    this.PAGE_HEIGHT=pheight;
    this.SKILL_BOX_WIDTH=((pwidth*80)/100);
    this.PADDING=((this.SKILL_BOX_WIDTH*2.5)/100);
    this.about = function() {
        console.log('page width='+this.PAGE_WIDTH +'  page height='+ this.PAGE_HEIGHT);
        console.log('skill box width='+this.SKILL_BOX_WIDTH+'  padding='+this.PADDING);
    };
};