// visibility state 
// expand state 
// project colors 
// project color index 


export class GlobalSettings {
    constructor() {
        this.visible = false; 
        this.expanded = false; 
        this.projectColors = [ 
                            "#de9592", 
                            "#dec392",
                            "#96c787",
                            "#87b9c7",
                            "#af9fcc",
                            "#c99fcc"
                        ];
        this.colorIndex = 0; 
        this.activeTab = [];
    }
}