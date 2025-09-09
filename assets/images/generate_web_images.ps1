# PowerShell script to resize an image for mobile, tablet, and large screens
# Usage: .\generate_web_images.ps1 filename.jpg

param(
    [string]$src = $null
)

if (-not $src) {
    if ($args.Count -gt 0) {
        $src = $args[0]
    } else {
        Write-Host "Usage: .\generate_web_images.ps1 <filename>"
        exit 1
    }
}

$baseName = [System.IO.Path]::GetFileNameWithoutExtension($src)

# Define sizes and centralized folders
$sizes = @(
	@{name="s"; width=480},
	@{name="m"; width=768},
	@{name="l"; width=1200},
	@{name="xl"; width=1920}
)
$formats = @("jpg", "webp")

foreach ($size in $sizes) {
	$sizeFolder = $size.name
	foreach ($format in $formats) {
		$formatFolder = Join-Path $sizeFolder $format
		if (!(Test-Path $formatFolder)) {
			New-Item -ItemType Directory -Path $formatFolder | Out-Null
		}
	$outFile = Join-Path $formatFolder "$baseName`_$($size.name).$format"
	magick $src -resize $($size.width) $outFile
	Write-Host "Generated: $outFile"
	}
}
Write-Host "All images generated and organized by size and format."
