# PowerShell script to resize bastard_2024_sebastien_durand_56.jpg for mobile, tablet, and large screens



$src = "bastard_2024_sebastien_durand_56.jpg"
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
