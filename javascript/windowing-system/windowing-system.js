// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */


export function Size(width = 80, height = 60) {
    this.width = width;
    this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
};


export function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

Position.prototype.move = function (newX, newY) {
    this.x = newX;
    this.y = newY;
};


export class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }

    resize(newSize) {
        // define o mínimo permitido de height e width em 1
        let newWidth = Math.max(newSize.width, 1);
        let newHeight = Math.max(newSize.height, 1);
        // operação para não ultrapassar as bordas da window
        newWidth = Math.min(newWidth, this.screenSize.width - this.position.x);
        newHeight = Math.min(newHeight, this.screenSize.height - this.position.y);
        this.size.width = newWidth;
        this.size.height  = newHeight;
    }

        move(position) {
        // smallest position is left upper corner
        let newX = Math.max(position.x, 0);
        let newY = Math.max(position.y, 0);
        // edges must not move past the edges of the screen
        newX = Math.min(newX, this.screenSize.width - this.size.width);
        newY = Math.min(newY, this.screenSize.height - this.size.height);
        this.position.move(newX, newY);
    }
}
export function changeWindow(programWindow) {
    programWindow.resize(new Size(400, 300));
    programWindow.move(new Position(100, 150));
    return programWindow;
}
 
