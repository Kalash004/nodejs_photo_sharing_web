class Post {
    constructor(message, imagename) {
        this.message = message;
        this.imagename = imagename;
    }

    renderPost() {
        if (this.message == undefined || this.imagename == undefined) {
            console.error(
                `Message: ${this.message} or image name: ${this.imagename} cant be undefined`
            );
            return;
        }
        return `<div class="container mt-4">
                    <div class="p-5 mb-4 bg-body-tertiary rounded-3">
                        <div class="container-fluid py-5">
                            <img src = "filesfromusers/${this.imagename}">
                            <p class="col-md-8 fs-4">
                            ${this.message}
                            </p>
                        </div>
                    </div>
                </div>`;
    }

    renderPostJustImage() {
        if (this.imagename == undefined) {
            console.error(`Image name: ${this.imagename} cant be undefined`);
            return;
        }
        return `<div class="container mt-4">
                    <div class="p-5 mb-4 bg-body-tertiary rounded-3">
                        <div class="container-fluid py-5">
                            <img src = "filesfromusers/${this.imagename}">
                       </div>
                    </div>
                </div>`;
    }
}

module.exports = Post