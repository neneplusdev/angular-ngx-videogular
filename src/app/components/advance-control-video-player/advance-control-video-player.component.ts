import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advance-control-video-player',
  templateUrl: './advance-control-video-player.component.html',
  styleUrls: ['./advance-control-video-player.component.css']
})
export class AdvanceControlVideoPlayerComponent implements OnInit {
  videoItems = [
    {
      name: 'Video one',
      src: 'http://static.videogular.com/assets/videos/videogular.mp4',
      type: 'video/mp4'
    },
    {
      name: 'Video two',
      src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
      type: 'video/mp4'
    },
    {
      name: 'Video three',
      src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
      type: 'video/mp4'
    }
  ];

  activeIndex = 0;
  currentVideo = this.videoItems[this.activeIndex];
  data;

  constructor() { }

  ngOnInit(): void {
  }

  videoPlayerInit(data) {
    this.data = data;

    this.data.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.initVdo.bind(this));
    this.data.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }

  nextVideo() {
    this.activeIndex++;

    if (this.activeIndex === this.videoItems.length) {
      this.activeIndex = 0;
    }

    this.currentVideo = this.videoItems[this.activeIndex];
  }

  initVdo() {
    this.data.play();
  }

  startPlaylistVdo(item, index: number) {
    this.activeIndex = index;
    this.currentVideo = item;
  }

}
