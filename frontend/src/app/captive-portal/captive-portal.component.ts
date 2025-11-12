import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-captive-portal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './captive-portal.component.html',
  styleUrls: ['./captive-portal.component.css'],
})
export class CaptivePortalComponent {
  selectedOS: 'windows' | 'linux' | null = null;
  downloadComplete = false;
  verified = false;

  selectOS(os: 'windows' | 'linux') {
    this.selectedOS = os;
  }

  downloadProfile() {
    if (!this.selectedOS) return;

    const profileContent = this.generateProfileContent(this.selectedOS);
    const filename =
      this.selectedOS === 'windows' ? 'wifi-profile.bat' : 'wifi-profile.sh';
    const mimeType =
      this.selectedOS === 'windows' ? 'application/bat' : 'application/x-sh';

    const blob = new Blob([profileContent], { type: mimeType });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    window.URL.revokeObjectURL(url);

    this.downloadComplete = true;
  }

  generateProfileContent(os: 'windows' | 'linux'): string {
    if (os === 'windows') {
      return `@echo off
echo ================================================
echo WiFi Network Configuration Profile
echo ================================================
echo.
echo Configuring network settings...
timeout /t 2 /nobreak >nul
echo.
echo Network profile installed successfully!
echo You may now connect to the WiFi network.
echo.
echo Press any key to exit...
pause >nul
`;
    } else {
      return `#!/bin/bash
echo "================================================"
echo "WiFi Network Configuration Profile"
echo "================================================"
echo ""
echo "Configuring network settings..."
sleep 2
echo ""
echo "Network profile installed successfully!"
echo "You may now connect to the WiFi network."
echo ""
read -p "Press enter to exit..."
`;
    }
  }

  verifySetup() {
    this.verified = true;
  }
}
