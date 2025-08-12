const std = @import("std");

pub fn build(b: *std.Build) void {
    
    const npm_build = b.addSystemCommand(&.{"./node_modules/.bin/vite", "build", "--outDir"});
    const public_dir = npm_build.addOutputDirectoryArg("public");

    b.getInstallStep().dependOn(&npm_build.step);

    b.installDirectory(.{
        .source_dir = public_dir,
        .install_dir = .prefix,
        .install_subdir = "public",
    });
}
