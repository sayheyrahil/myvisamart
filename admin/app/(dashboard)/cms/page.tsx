"use client"

import { useCallback, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import RichTextEditor from "@/components/common/rich-text-editor"

import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Pencil } from "lucide-react";
import { axiosInstance } from "@/lib/axios-instance";
import { ENDPOINTS } from "@/lib/constants";




export type ContactInfo = {
  id: string;
  name: string;
  phone: string;
  phone_2: string;
  email: string;
  email_2: string;
  location: string;
  mapIframe: string;
  updatedAt: Date;
};
export type ContactUs = {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  createdAt: Date;
};

export type CMSPage = {
  id: string;
  name: string; // e.g., "guinness-world-records", "about", etc.
  title: string;
  content: string;
  updatedAt: Date;
};

export type SocialMedia = {
  id: string;
  platform: "facebook" | "instagram" | "youtube" | "twitter";
  url: string;
  updatedAt: Date;
};
function CMSManagementPage() {
  // Provide default empty arrays/objects to avoid undefined errors
  const [cmsPages, setCMSPages] = useState<CMSPage[]>([]);
  const [socialLinks, setSocialLinks] = useState<SocialMedia[]>([]);
  const [contactInfo, setContactInfo] = useState<ContactInfo>();
  const [selectedPage, setSelectedPage] = useState<CMSPage | null>(null);
  const [selectedSocial, setSelectedSocial] = useState<SocialMedia | null>(null);
  const [isContactEditing, setIsContactEditing] = useState(false);
  const [editedContactInfo, setEditedContactInfo] = useState<ContactInfo>();
  const [isPageDialogOpen, setIsPageDialogOpen] = useState(false);
  const [isSocialDialogOpen, setIsSocialDialogOpen] = useState(false);

  const { toast } = useToast();

  const handlePageEdit = (page: CMSPage) => {
    setSelectedPage({ ...page });
    setIsPageDialogOpen(true);
  };
  const handleEdit = () => {
    setIsContactEditing(!isContactEditing);
    if (!isContactEditing && contactInfo) {
      // Ensure all fields are present and not undefined, especially 'id'
      setEditedContactInfo({
        id: contactInfo.id ?? "",
        name: contactInfo.name ?? "",
        phone: contactInfo.phone ?? "",
        phone_2: contactInfo.phone_2 ?? "",
        email: contactInfo.email ?? "",
        email_2: contactInfo.email_2 ?? "",
        location: contactInfo.location ?? "",
        mapIframe: contactInfo.mapIframe ?? "",
        updatedAt: contactInfo.updatedAt ?? new Date(),
      } as ContactInfo);
    }
  };

  const handleSocialEdit = (social: SocialMedia) => {
    setSelectedSocial({ ...social });
    setIsSocialDialogOpen(true);
  };

  const handlePageSave = async () => {
    if (selectedPage) {
      // ✅ Title validation
      if (!selectedPage.title || selectedPage.title.trim() === "") {
        toast({
          variant: "destructive",
          title: "Validation Error",
          description: "Title cannot be empty.",
        });
        return;
      }

      setCMSPages(pages =>
        pages.map(page =>
          page.id === selectedPage.id
            ? { ...selectedPage, updatedAt: new Date() }
            : page
        )
      );

      try {
        await axiosInstance.post(ENDPOINTS.cmsPages_store, selectedPage);

        toast({
          title: "Page updated",
          description: "The CMS page has been updated successfully.",
        });

        setIsPageDialogOpen(false);
        setSelectedPage(null);
      } catch (error: any) {
        if (error.response) {
          toast({
            variant: "destructive",
            title: "Failed to update page!",
            description: error.response.data.data.error,
          });
        }
      }
    }
  };

  const handleSocialSave = async () => {
    if (selectedSocial) {
      if (!selectedSocial.url || selectedSocial.url.trim() === "") {
        toast({
          variant: "destructive",
          title: "Validation Error",
          description: "URL cannot be empty.",
        });
        return;
      }

      try {
        await axiosInstance.post(ENDPOINTS.social_media_store, selectedSocial);

        setSocialLinks(links =>
          links.map(link =>
            link.id === selectedSocial.id
              ? { ...selectedSocial, updatedAt: new Date() }
              : link
          )
        );

        setIsSocialDialogOpen(false);
        setSelectedSocial(null);

        toast({
          title: "Social link updated",
          description: "The social media link has been updated successfully.",
        });
      } catch (error: any) {

        console.error("Error updating social link:", error);
        if (error.response) {
          toast({
            variant: "destructive",
            title: "Failed to update social link!",
            description: error.response.data.data.error || "Something went wrong.",
          });
        } else {
          toast({
            variant: "destructive",
            title: "Unexpected Error",
            description: "Unable to update the social link. Please try again.",
          });
        }
      }
    }
  };

  const handleContactSave = async () => {
    if (!editedContactInfo?.name?.trim()) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Name cannot be empty.",
      });
      return;
    }
    if (!editedContactInfo.phone?.trim()) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Phone number cannot be empty.",
      });
      return;
    }
    if (!editedContactInfo.email?.trim()) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Email cannot be empty.",
      });
      return;
    }

    try {
      // @ts-ignore
      await axiosInstance.post(ENDPOINTS.contact_info_store, editedContactInfo);

      setContactInfo({
        ...(editedContactInfo as ContactInfo),
        updatedAt: new Date(),
      });

      setIsContactEditing(false);

      toast({
        title: "Contact information updated",
        description: "The contact information has been updated successfully.",
      });
    } catch (error: any) {
      if (error.response) {
        toast({
          variant: "destructive",
          title: "Failed to update contact info!",
          description: error.response.data.data.error || "Something went wrong.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Unexpected Error",
          description: "Unable to update the contact info. Please try again.",
        });
      }
    }
  };

  const getSocialMedia = useCallback(
    async (
      page = 1,
      perPage = 10,
      sortField = "createdAt",
      sortDirection = "desc"
    ) => {
      setSocialLinks([]);
      const options = `?page=${page}&per_page=${perPage}&delay=1&sort_direction=${sortDirection}&sort_field=${sortField}`;
      try {
        const response: any = await axiosInstance.get(ENDPOINTS.social_media_get + options)
        if (response && response.data) {
          setSocialLinks(response.data.data.docs);
        }
      } catch (error: any) {
        if (error.response) {
          console.error(error);
        } else {
          console.error("Error fetching data:", error.message);
        }
      }
    },
    []
  );

  const defaultContactInfo: ContactInfo = {
    id: "",
    name: "",
    phone: "",
    phone_2: "",
    email: "",
    email_2: "",
    location: "",
    mapIframe: "",
    updatedAt: new Date(),
  };

  const getContactInfo = useCallback(
    async (
      page = 1,
      perPage = 10,
      sortField = "createdAt",
      sortDirection = "desc"
    ) => {
      setContactInfo(defaultContactInfo);
      const options = `?page=${page}&per_page=${perPage}&delay=1&sort_direction=${sortDirection}&sort_field=${sortField}`;
      try {
        const response: any = await axiosInstance.get(ENDPOINTS.contact_info_get + options)
        if (response && response.data) {
          setContactInfo(response.data.data.docs);
          setEditedContactInfo(response.data.data.docs);
        }
      } catch (error: any) {
        if (error.response) {
          console.error(error);
        } else {
          console.error("Error fetching data:", error.message);
        }
      }
    },
    []
  );

  const getCmsPages = useCallback(
    async (
      page = 1,
      perPage = 10,
      sortField = "createdAt",
      sortDirection = "desc"
    ) => {
      setCMSPages([]);
      const options = `?page=${page}&per_page=${perPage}&delay=1&sort_direction=${sortDirection}&sort_field=${sortField}`;
      try {
        const response: any = await axiosInstance.get(ENDPOINTS.cmsPages_get + options)
        if (response && response.data) {
          setCMSPages(response.data.data.docs);
        }
      } catch (error: any) {
        if (error.response) {
          console.error(error);
        } else {
          console.error("Error fetching data:", error.message);
        }
      }
    },
    []
  );

  useEffect(() => {
    getCmsPages()
    getContactInfo()
    getSocialMedia()
  }, [])


  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof ContactInfo) => {
    setEditedContactInfo({
      id: editedContactInfo?.id ?? "",
      name: field === "name" ? e.target.value : editedContactInfo?.name ?? "",
      phone: field === "phone" ? e.target.value : editedContactInfo?.phone ?? "",
      phone_2: field === "phone_2" ? e.target.value : editedContactInfo?.phone_2 ?? "",
      email: field === "email" ? e.target.value : editedContactInfo?.email ?? "",
      email_2: field === "email_2" ? e.target.value : editedContactInfo?.email_2 ?? "",
      location: field === "location" ? e.target.value : editedContactInfo?.location ?? "",
      mapIframe: field === "mapIframe" ? e.target.value : editedContactInfo?.mapIframe ?? "",
      updatedAt: editedContactInfo?.updatedAt ?? new Date(),
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Content Management</h1>
        <p className="text-muted-foreground">
          Manage your website's content, social media links, and contact information.
        </p>
      </div>

      <Tabs defaultValue="pages" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pages">CMS Pages</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="contact">Contact Information</TabsTrigger>
        </TabsList>

        <TabsContent value="pages" className="space-y-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cmsPages && cmsPages.length > 0 ? (
                  cmsPages.map((page) => (
                    <TableRow key={page.id}>
                      <TableCell className="font-medium">{page.title}</TableCell>
                      <TableCell>{new Date(page.updatedAt).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handlePageEdit(page)}
                        >
                          <Pencil className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center py-4 text-muted-foreground">
                      No CMS pages found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="social" className="space-y-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Platform</TableHead>
                  <TableHead>URL</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {socialLinks && socialLinks.length > 0 ? (
                  socialLinks.map((social) => (
                    <TableRow key={social.id}>
                      <TableCell className="font-medium capitalize">
                        {social.platform}
                      </TableCell>
                      <TableCell className="max-w-[300px] truncate">{social.url}</TableCell>
                      <TableCell>
                        {new Date(social.updatedAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleSocialEdit(social)}
                        >
                          <Pencil className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center py-4 text-muted-foreground">
                      No social links found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="contact" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>Contact Information</CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={handleEdit}
              >
                {isContactEditing ? "Cancel" : "Edit"}
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {!contactInfo ? (
                <p className="text-sm text-muted-foreground text-center py-8">
                  No contact information available.
                </p>
              ) : (
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label>Name</Label>
                    {isContactEditing ? (
                      <Input
                        value={editedContactInfo?.name || ""}
                        onChange={(e) =>
                          handleEditChange(e, "name")
                        }
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground">{contactInfo.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label>Phone</Label>
                    {isContactEditing ? (
                      <Input
                        value={editedContactInfo?.phone || ""}
                        onChange={(e) =>
                          handleEditChange(e, "phone")
                        }
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground">{contactInfo.phone}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label>Phone 2</Label>
                    {isContactEditing ? (
                      <Input
                        value={editedContactInfo?.phone_2 || ""}
                        onChange={(e) =>
                          handleEditChange(e, "phone_2")
                        }
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground">{contactInfo.phone_2}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    {isContactEditing ? (
                      <Input
                        type="email"
                        value={editedContactInfo?.email || ""}
                        onChange={(e) =>
                          handleEditChange(e, "email")
                        }
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground">{contactInfo.email}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label>Email 2</Label>
                    {isContactEditing ? (
                      <Input
                        type="email"
                        value={editedContactInfo?.email_2 || ""}
                        onChange={(e) =>
                          handleEditChange(e, "email_2")
                        }
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground">{contactInfo.email_2}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label>Location</Label>
                    {isContactEditing ? (
                      <Input
                        value={editedContactInfo?.location || ""}
                        onChange={(e) =>
                          handleEditChange(e, "location")
                        }
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground">{contactInfo.location}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label>Map Embed Code</Label>
                    {isContactEditing ? (
                      <Input
                        value={editedContactInfo?.mapIframe || ""}
                        onChange={(e) =>
                          handleEditChange(e, "mapIframe")
                        }
                      />
                    ) : (
                      <div
                        className="rounded-md border p-4"
                        dangerouslySetInnerHTML={{ __html: contactInfo.mapIframe }}
                      />
                    )}
                  </div>
                </div>
              )}
              {isContactEditing && (
                <Button onClick={handleContactSave} className="mt-4">
                  Save Changes
                </Button>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* CMS Page Edit Dialog */}
      <Dialog open={isPageDialogOpen} onOpenChange={setIsPageDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Edit {selectedPage?.title}</DialogTitle>
            <DialogDescription>
              Make changes to the page content below.
            </DialogDescription>
          </DialogHeader>
          {selectedPage && (
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label>Title</Label>
                <Input
                  value={selectedPage.title}
                  onChange={(e) =>
                    setSelectedPage({ ...selectedPage, title: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>Content</Label>
                <RichTextEditor
                  value={selectedPage.content}
                  onChange={(value: any) =>
                    setSelectedPage({ ...selectedPage, content: value })
                  }
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsPageDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handlePageSave}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Social Media Edit Dialog */}
      <Dialog open={isSocialDialogOpen} onOpenChange={setIsSocialDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Edit {selectedSocial?.platform} Link</DialogTitle>
            <DialogDescription>
              Update your social media profile URL.
            </DialogDescription>
          </DialogHeader>
          {selectedSocial && (
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label>URL</Label>
                <Input
                  value={selectedSocial.url}
                  onChange={(e) =>
                    setSelectedSocial({ ...selectedSocial, url: e.target.value })
                  }
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsSocialDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSocialSave}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default (CMSManagementPage)